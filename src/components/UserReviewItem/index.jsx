import { MdOutlineStar, MdStarOutline } from 'react-icons/md';
import { Container } from './UserReviewItem.styles';
import { FiChevronDown } from 'react-icons/fi';
import { FaRegTrashAlt, FaRegEdit } from 'react-icons/fa';
import { useClickOutside, useLockScreen, useRouter, useToggle } from '../../hooks';
import { useState, useRef } from 'react';
import { useMutation, useQueryClient } from 'react-query';
import { deleteReview } from '../../api/review';
import { useAuthContext } from '../../context/AuthContext';
import { toast } from 'react-toastify';

const UserReviewItem = ({ review }) => {
  const buttonRef = useRef();
  const menuRef = useRef();
  const { user } = useAuthContext();
  const queryClient = useQueryClient();
  const [openAction, toggleAction] = useToggle();
  const [openDeleteModal, setOpenDeleteModal] = useState(false);
  const router = useRouter();

  useClickOutside(menuRef, (e) => {
    if (!buttonRef.current?.contains(e.target)) {
      toggleAction(false);
    }
  });

  const { mutate: handleDelete, isLoading: deleteLoading } = useMutation(deleteReview, {
    onSuccess: (data) => {
      queryClient.invalidateQueries(['reviews', 'list', { user: user._id }]);
      toast.success('Delete review successfully!');
      setOpenDeleteModal(false);
    },
    onError: (error) => {
      toast.error(error.message);
    },
  });

  const onDeleteReview = () => {
    handleDelete(review._id);
  };

  useLockScreen(openDeleteModal);

  return (
    <Container>
      {openDeleteModal && (
        <>
          <div className='delete-modal' onClick={() => setOpenDeleteModal(false)}></div>
          <div className='content'>
            <h3>Are you sure to delete this review?</h3>
            <div className='btn-container'>
              <button className='cancel-btn' onClick={() => setOpenDeleteModal(false)}>
                Cancel
              </button>
              <button className='delete-btn' onClick={onDeleteReview}>
                {deleteLoading ? 'Loading...' : 'Delete'}
              </button>
            </div>
          </div>
        </>
      )}
      <div className='left'>
        {review.cloud_platform.logo && (
          <div className='img-wrapper'>
            <img src={review.cloud_platform.logo} alt='' className='image' />
          </div>
        )}
        <div className='info'>
          <h2 className='name'>{review.cloud_platform.name}</h2>
          <div className='stars'>
            {[1, 2, 3, 4, 5].map((x) => {
              if (x <= review.review_detail.rating) {
                return <MdOutlineStar key={x} />;
              } else {
                return <MdStarOutline key={x} />;
              }
            })}
          </div>
        </div>
      </div>
      <div className='right'>
        <button ref={buttonRef} onClick={() => toggleAction()} className='action-btn'>
          <span>Actions</span>
          <FiChevronDown />
        </button>
        {openAction && (
          <div ref={menuRef} className='action-menu'>
            <div
              className='action-item'
              onClick={() => {
                toggleAction(false);
                setOpenDeleteModal(true);
              }}
            >
              <FaRegTrashAlt />
              <span>Delete</span>
            </div>
            <div className='action-item' onClick={() => router.push(`/reviews/${review._id}/edit`)}>
              <FaRegEdit />
              <span>Edit Review</span>
            </div>
          </div>
        )}
      </div>
    </Container>
  );
};

export default UserReviewItem;
