import { useClickOutside, useLockScreen, useToggle } from '../../hooks';
import { createPortal } from 'react-dom';
import { Content, Progress } from './FilterMenu.styles';
import { useRef } from 'react';
import { MdClose } from 'react-icons/md';
import Checkbox from '../Checkbox';
import { FiSearch } from 'react-icons/fi';
import { companySizes, ratingOptions } from './filterData';
import { actions, useReviewContext } from '../../context/ReviewActions';
import { useState } from 'react';
import { useQuery } from 'react-query';
import { getFilters } from '../../api/stats';
import Loading from '../Loading';
import { ModalContainer } from '../../shared';

const FilterMenu = ({ open, onClose }) => {
  const {
    dispatch,
    companySizeList,
    ratingList,
    industryList,
    pagination,
    stats,
    isPreviousData,
    isLoading: reviewLoading,
  } = useReviewContext();
  const contentRef = useRef();
  const [temp, setTemp] = useState('');
  const [viewAll, toggleViewAll] = useToggle();
  useLockScreen(open);
  useClickOutside(contentRef, () => {
    onClose();
  });

  const { data, isLoading, isError, error } = useQuery(['stats', 'filters'], getFilters, {
    staleTime: 5 * 60 * 1000,
    retry: 1,
    notifyOnChangeProps: 'tracked',
  });

  const iList = data?.industries
    ?.filter(
      (i) =>
        i.title.toLowerCase().indexOf(temp.toLowerCase()) !== -1 ||
        i.value.toLowerCase().indexOf(temp.toLowerCase()) !== -1
    )
    ?.sort((a, b) => {
      if (a && b && stats.industryStats) {
        const aCount = stats.industryStats[a.value] || 0;
        const bCount = stats.industryStats[b.value] || 0;
        return bCount - aCount;
      }
      return 0;
    });

  if (isLoading || reviewLoading || !stats.industryStats) {
    return null;
  }
  if (isError) {
    return <p>{error.message}</p>;
  }

  return createPortal(
    <ModalContainer open={open}>
      <Content open={open} ref={contentRef}>
        <div className='header'>
          <span className='label'>Filters</span>
          {isPreviousData && (
            <div style={{ display: 'flex', justifyContent: 'center' }}>
              <Loading width={30} />
            </div>
          )}
          <MdClose onClick={onClose} />
        </div>

        <div className='main'>
          <div className='group'>
            <h3 className='title'>Reviewer's Company Size</h3>
            <div className='options'>
              {companySizes.map((c) => (
                <div key={c.id} className='option company-size-option'>
                  <Checkbox
                    checked={companySizeList.includes(c.value)}
                    handleClick={() => {
                      dispatch({
                        type: actions.CHANGE_COMPANY_SIZE,
                        payload: c.value,
                      });
                    }}
                  />
                  <span className='label'>
                    {c.label} ({stats.companySizeStats[c.value] || 0})
                  </span>
                </div>
              ))}
            </div>
          </div>
          <div className='group'>
            <h2 className='title'>Overall Rating</h2>
            <div className='options'>
              {ratingOptions.map((r, index) => {
                const ratingCount = stats.ratingStats[r.toString()];
                const total_rating = Object.keys(stats.ratingStats).reduce(
                  (acc, current) => acc + stats.ratingStats[current],
                  0
                );
                const percent = Math.round((ratingCount * 100) / total_rating);
                return (
                  <div key={index} className='option rating-option'>
                    <Checkbox
                      checked={ratingList.includes(r)}
                      handleClick={() => {
                        dispatch({
                          type: actions.CHANGE_RATING,
                          payload: r,
                        });
                      }}
                    />
                    <span className='label'>{r}</span>
                    <Progress className='progress' percent={percent} />
                    <span>({ratingCount || 0})</span>
                  </div>
                );
              })}
            </div>
          </div>
          <div className='group'>
            <h2 className='title'>Industry</h2>
            <div className='search'>
              <FiSearch />
              <input
                value={temp}
                onChange={(e) => setTemp(e.target.value)}
                type='text'
                placeholder='Find an industry'
              />
            </div>
            <div className='options'>
              {(viewAll ? iList : iList.slice(0, 8)).map((i) => (
                <div key={i._id} className='option industry-option'>
                  <Checkbox
                    checked={industryList.includes(i.value)}
                    handleClick={() => {
                      dispatch({
                        type: actions.CHANGE_INDUSTRY,
                        payload: i.value,
                      });
                    }}
                  />
                  <span className='label'>{i.title}</span>
                  <span className='label'>({stats.industryStats[i.value] || 0})</span>
                </div>
              ))}
            </div>
            <button className='view-all' onClick={() => toggleViewAll()}>
              {!viewAll ? 'View All' : 'Show Less'}
            </button>
          </div>
        </div>
        <div className='footer'>
          <span
            className='label'
            onClick={() => {
              dispatch({ type: actions.CLEAR_ALL });
            }}
          >
            Clear All
          </span>
          <button onClick={onClose} className='number-btn'>
            Show {pagination.total_results} {pagination.total_results > 1 ? 'Results' : 'Result'}
          </button>
        </div>
      </Content>
    </ModalContainer>,
    document.getElementById('portal')
  );
};

export default FilterMenu;
