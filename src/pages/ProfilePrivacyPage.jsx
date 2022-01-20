import { useEffect } from 'react';
import { useState } from 'react';
import { useMutation, useQuery } from 'react-query';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { getUser, updateUser } from '../api/user';
import { Checkbox } from '../components';
import { useAuthContext } from '../context/AuthContext';
import { SubmitButton } from '../shared';
import { Container } from './styles/ProfilePrivacyPage';

const ProfilePrivacyPage = () => {
  const { user } = useAuthContext();
  const [toggled, setToggled] = useState(!!user?.is_private);
  const { data: fullUser } = useQuery(
    ['auth', 'getUser', { full: true }],
    () => getUser({ full: true }),
    {
      staleTime: 60 * 1000,
      select: (data) => data.user,
    }
  );

  const { mutate } = useMutation(updateUser, {
    onSuccess: (data) => {
      toast.success('Update user privacy successfully!');
    },
  });

  useEffect(() => {
    if (user) setToggled(user.is_private);
  }, [user]);

  return (
    <Container>
      <h2 className='privacy-title'>Appearance</h2>
      <p className='intro'>Here is how you appear on TrustRadius</p>
      {user && fullUser ? (
        <div className='main'>
          <div className='avatar'>
            <img
              src={
                !toggled && user?.picture_url
                  ? user?.picture_url
                  : 'https://www.clipartmax.com/png/middle/424-4242023_fa-user-circle-icon.png'
              }
              alt=''
            />
          </div>
          <div className='info'>
            <p className='name'>{!toggled ? user?.name : fullUser?.job_role?.title}</p>
            <p className='job_title'>
              {!toggled
                ? fullUser?.job_role?.title || ''
                : fullUser?.company?.industry && `${fullUser?.company?.industry.title} company`}
            </p>
            <p>
              {!toggled
                ? fullUser?.job_title && fullUser?.company?.industry
                  ? `${fullUser?.job_title} - ${fullUser?.company?.industry.title}, ${fullUser?.company?.size.title}`
                  : ''
                : fullUser?.company?.size && `with ${fullUser?.company?.size.title}`}
            </p>
          </div>
        </div>
      ) : null}
      <Link className='edit-link' to='/profile'>
        Edit Profile
      </Link>
      <div className='toggle-wrapper'>
        <Checkbox
          checked={toggled}
          handleClick={() => {
            mutate({ _id: user._id, is_private: !toggled });
            setToggled(!toggled);
          }}
        />
        <p className='desc'>
          Don’t display my personal info with my profile, reviews, and ratings on TrustRadius
          TrustRadius will stop sharing my name, title, company name, and photo with partners in
          relation to my reviews.
        </p>
      </div>
      <SubmitButton>Save</SubmitButton>
    </Container>
  );
};

export default ProfilePrivacyPage;
