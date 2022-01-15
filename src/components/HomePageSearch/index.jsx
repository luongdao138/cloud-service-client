import { IoMdSearch } from 'react-icons/io';
import { Container, SearchContent } from './HomePageSearch.styles';
import feature1 from '../../assets/features/feature-1.svg';
import feature2 from '../../assets/features/feature-2.svg';
import feature3 from '../../assets/features/feature-3.svg';
import { useRef, useState } from 'react';
import { useDebounce, useRouter, useToggle } from '../../hooks';
import { useQuery } from 'react-query';
import { getStats } from '../../api/stats';
import { formatInterger } from '../../helpers/convertNumber';
import SearchRecommend from './SearchRecommend';
import { getClouds } from '../../api/cloud';
import { useEffect } from 'react';

const featureData = [
  {
    id: 1,
    icon: feature1,
    label: '100% Trusted',
    desc: 'Every reviewer verified, every review vetted, since day one.',
  },
  {
    id: 2,
    icon: feature2,
    label: 'No Ads, No Bias',
    desc: "We don't sell leads or paid placements. Vendors can't skew results, period.",
  },
  {
    id: 3,
    icon: feature3,
    label: 'Quality First',
    desc: 'Our review process results in more depth, detail, and balance than other sites.',
  },
];

const HomePageSearch = () => {
  const inputRef = useRef();
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 500);
  const [openMenuSearch, toggleMenu] = useToggle(false);
  const { push } = useRouter();

  const { data: searchData } = useQuery(
    ['clouds', 'list', { search: debouncedSearchTerm, limit: 20, fields: '_id,name' }],
    ({ queryKey }) => getClouds(queryKey[2]),
    {
      staleTime: 5 * 60 * 1000,
      retry: 1,
      enabled: debouncedSearchTerm.length > 0,
    }
  );

  useEffect(() => {
    if (searchData) {
      toggleMenu(true);
    }
  }, [searchData, toggleMenu]);

  const { data } = useQuery(['stats', 'general'], getStats, {
    staleTime: 60 * 1000 * 5,
    notifyOnChangeProps: 'tracked',
    retry: 1,
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!searchTerm) return;
    push(`/clouds?search=${searchTerm}`);
  };

  return (
    <Container>
      <SearchContent>
        <h3 className='title'>Sofware Reviews You Can Trust</h3>
        <form className='search' onSubmit={handleSubmit}>
          <input
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            type='text'
            placeholder='Enter cloud name...'
            ref={inputRef}
          />
          <button>
            <IoMdSearch />
          </button>
          {openMenuSearch && debouncedSearchTerm && searchData?.clouds?.length ? (
            <SearchRecommend
              inputRef={inputRef}
              searchData={searchData}
              onClose={() => toggleMenu(false)}
            />
          ) : null}
        </form>
        <p className='desc'>
          {data?.reviewCount ? formatInterger(data.reviewCount) : 0} reviews & ratings from 100%
          verified users
        </p>
        <div className='value'>
          <h2>Choose Confidently</h2>
          <p>Get the product feedback you need from people like you.</p>
        </div>
        <div className='features'>
          {featureData.map((feature) => (
            <div key={feature.id} className='feature'>
              <img src={feature.icon} alt='' />
              <div className='feature-info'>
                <p className='feature-label'>{feature.label}</p>
                <p className='feature-desc'>{feature.desc}</p>
              </div>
            </div>
          ))}
        </div>
        <button className='promise-btn'>Our Promise To You</button>
      </SearchContent>
    </Container>
  );
};

export default HomePageSearch;
