import { useRef, useState, useEffect } from 'react';
import { BsFillCaretDownFill } from 'react-icons/bs';
import { MdSearch } from 'react-icons/md';
import { useQuery } from 'react-query';
import { Cloud, CloudSkeleton, Pagination } from '../components';
import { useClickOutside, useRouter, useToggle } from '../hooks';
import { Content } from '../shared';
import { Container, FilterButton, SortItem, SortMenu } from './styles/CloudServicePage.styles';
import { getClouds } from '../api/cloud';
import { useSearchParams } from 'react-router-dom';

const sortOptions = [
  {
    id: 1,
    label: 'Number of ratings, high to low',
    value: '-stats.review_count',
  },
  {
    id: 2,
    label: 'Number of ratings, low to high',
    value: 'stats.review_count',
  },
  {
    id: 3,
    label: 'Average rating, high to low',
    value: '-stats.rating_average',
  },
  {
    id: 4,
    label: 'Average rating, low to high',
    value: 'stats.rating_average',
  },
];

const CloudServicePage = () => {
  const { query } = useRouter();
  const [temp, setTemp] = useState(query.search);
  const [search, setSearch] = useState(query.search);
  const [openOrder, toggle] = useToggle();
  const [order, setOrder] = useState('-stats.review_count');
  const menuRef = useRef(null);
  const buttonRef = useRef(null);
  const [searchParams, setSearchParams] = useSearchParams();
  const [pagination, setPagination] = useState({});

  useEffect(() => {
    if (pagination.page) {
      setSearchParams({ search, order, page: pagination.page, limit: pagination.limit });
    }
  }, [search, order, pagination, setSearchParams]);

  const { data, isLoading, isError, error } = useQuery(
    [
      'clouds',
      'list',
      {
        search,
        order,
        page: pagination.page || 1,
        limit: pagination.limit || 10,
      },
    ],
    ({ queryKey }) => getClouds(queryKey[2]),
    {
      staleTime: 30 * 1000,
      notifyOnChangeProps: 'tracked',
      retry: 1,
      keepPreviousData: true,
      onSuccess: (data) => {
        setPagination(data.pagination);
      },
    }
  );

  useClickOutside(menuRef, (e) => {
    if (!buttonRef.current?.contains(e.target)) {
      toggle(false);
    }
  });

  const handleSearch = (e) => {
    e.preventDefault();
    if (temp) {
      setSearch(temp);
    }
  };

  if (isError) {
    return <p>{error.message}</p>;
  }

  return (
    <Container>
      <Content>
        <form className='search' onSubmit={handleSearch}>
          <input type='text' value={temp} onChange={(e) => setTemp(e.target.value)} />
          <MdSearch />
        </form>
        <div className='sort-container'>
          {pagination.total_results ? (
            <p className='label'>
              Products {(pagination.page - 1) * pagination.limit + 1} -{' '}
              {pagination.page * pagination.limit > pagination.total_results
                ? pagination.total_results
                : pagination.page * pagination.limit}{' '}
              of {pagination.total_results}
            </p>
          ) : (
            <p></p>
          )}
          <div className='right'>
            <FilterButton
              ref={buttonRef}
              open={openOrder}
              className='sort-result'
              onClick={() => toggle()}
            >
              <span>{sortOptions.find((x) => x.value === order)?.label}</span>
              <BsFillCaretDownFill />
            </FilterButton>
            <SortMenu ref={menuRef} open={openOrder} className='sort-menu'>
              {sortOptions.map((o) => (
                <SortItem
                  active={o.value === order}
                  key={o.id}
                  onClick={() => {
                    toggle();
                    setOrder(o.value);
                  }}
                >
                  {o.label}
                </SortItem>
              ))}
            </SortMenu>
          </div>
        </div>
        {!isLoading ? (
          data.clouds.length ? (
            data.clouds.map((cloud) => {
              return <Cloud key={cloud._id} {...cloud} />;
            })
          ) : (
            <p>No cloud services found!</p>
          )
        ) : (
          [...new Array(3)].map((_, index) => {
            return <CloudSkeleton key={index} />;
          })
        )}
        {!isLoading && (
          <Pagination
            onPageChange={(page) => {
              console.log(page);
              const newPage = page.selected + 1;
              setPagination({ ...pagination, page: newPage });
            }}
            pageCount={
              pagination.limit ? Math.ceil(pagination.total_results / pagination.limit) : 0
            }
            pageRange={2}
            limit={pagination.limit}
            onLimitChange={(l) => {
              setPagination({ ...pagination, limit: l });
            }}
          />
        )}
      </Content>
    </Container>
  );
};

export default CloudServicePage;
