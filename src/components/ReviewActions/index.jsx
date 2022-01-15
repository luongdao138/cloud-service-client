import { useRef, useState } from 'react';
import { Container, SortItem } from './ReviewActions.styles';
import { FiFilter, FiSearch, FiChevronDown } from 'react-icons/fi';
import { useToggle, useClickOutside } from '../../hooks';
import FilterMenu from '../FilterMenu';
import { actions, useReviewContext } from '../../context/ReviewActions';

const sortOptions = [
  {
    id: 1,
    label: 'Date',
    value: '-published_at',
  },
  {
    id: 2,
    label: 'Highest Overall Rating',
    value: '-review_detail.rating',
  },
  {
    id: 3,
    label: 'Lowest Overall Rating',
    value: 'review_detail.rating',
  },
];

const ReviewActions = () => {
  const { sort, search, dispatch, total_filters, pagination, isLoading } = useReviewContext();
  const [openSortMenu, toggleSort] = useToggle();
  const [openFilterMenu, toggleFilter] = useToggle();
  const sortMenuRef = useRef(null);
  const sortButtonRef = useRef(null);
  const [temp, setTemp] = useState(search);

  useClickOutside(sortMenuRef, (e) => {
    if (!sortButtonRef.current?.contains(e.target)) {
      toggleSort(false);
    }
  });

  const sortLabel = sortOptions.find((i) => i.value === sort).label;

  const handleChangeSort = (value) => {
    dispatch({ type: actions.CHANGE_SORT, payload: value });
    toggleSort();
  };

  const handleSearchReview = (e) => {
    e.preventDefault();
    dispatch({ type: actions.CHANGE_SEARCH, payload: temp });
  };

  return (
    <Container>
      <FilterMenu open={openFilterMenu} onClose={() => toggleFilter(false)} />
      <div className='top'>
        <div className='title'>
          <h2>Ratings And Reviews</h2>
          {pagination.total_results ? (
            <span>
              ({(pagination.page - 1) * pagination.limit + 1}-{' '}
              {pagination.page * pagination.limit > pagination.total_results
                ? pagination.total_results
                : pagination.page * pagination.limit}{' '}
              of {pagination.total_results})
            </span>
          ) : (
            <span>No results</span>
          )}
        </div>
        <div className='sort'>
          <span className='label'>Sort by</span>
          <div className='menu-wrapper'>
            <button ref={sortButtonRef} className='sort-btn' onClick={() => toggleSort()}>
              <span>{sortLabel}</span>
              <FiChevronDown />
            </button>
            {openSortMenu && (
              <ul className='menu' ref={sortMenuRef}>
                {sortOptions.map((o) => (
                  <SortItem
                    active={sort === o.value}
                    key={o.id}
                    onClick={() => handleChangeSort(o.value)}
                  >
                    {o.label}
                  </SortItem>
                ))}
              </ul>
            )}
          </div>
        </div>
      </div>
      <div className='bottom'>
        <form className='search' onSubmit={handleSearchReview}>
          <input
            value={temp}
            onChange={(e) => setTemp(e.target.value)}
            type='text'
            placeholder={`Search these ${pagination.total_results || 0} reviews...`}
          />
          <FiSearch />
        </form>
        <div className='filter-container'>
          <button
            disabled={isLoading}
            className='filter-btn'
            style={{
              backgroundColor: total_filters ? '#1E50E5' : '#fff',
              color: total_filters ? '#fff' : '#002269',
            }}
            onClick={() => toggleFilter()}
          >
            <FiFilter />
            <span>
              {!total_filters
                ? 'Filter Results'
                : `${total_filters}${total_filters > 1 ? ' filters' : ' filter'}`}
            </span>
          </button>
        </div>
      </div>
    </Container>
  );
};

export default ReviewActions;
