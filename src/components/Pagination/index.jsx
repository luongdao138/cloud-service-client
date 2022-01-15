import { useRef } from 'react';
import { FiChevronDown } from 'react-icons/fi';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';
import ReactPaginate from 'react-paginate';
import { useClickOutside, useToggle } from '../../hooks';
import { Container, LimitItem } from './Pagination.styles';

const limitOptions = [10, 20, 50];

const Pagination = ({ limit, onPageChange, pageRange = 2, pageCount = 0, onLimitChange }) => {
  const limitButtonRef = useRef();
  const limitMenuRef = useRef();
  const [openLimitMenu, toggleLimit] = useToggle();

  const limitLabel = `${limit} items per page`;

  useClickOutside(limitMenuRef, (e) => {
    if (!limitButtonRef.current?.contains(e.target)) {
      toggleLimit(false);
    }
  });

  return (
    <Container>
      <div className='limit-wrapper'>
        <button ref={limitButtonRef} className='limit-btn' onClick={() => toggleLimit()}>
          <span>{limitLabel}</span>
          <FiChevronDown />
        </button>
        {openLimitMenu && (
          <ul className='menu' ref={limitMenuRef}>
            {limitOptions.map((l) => (
              <LimitItem
                active={limit === l}
                key={l}
                onClick={() => {
                  onLimitChange(l);
                  toggleLimit(false);
                }}
              >
                {l} items per page
              </LimitItem>
            ))}
          </ul>
        )}
      </div>
      <ReactPaginate
        breakLabel='...'
        nextLabel={<MdChevronRight />}
        previousLabel={<MdChevronLeft />}
        onPageChange={onPageChange}
        pageRangeDisplayed={pageRange}
        pageCount={pageCount}
        renderOnZeroPageCount={null}
        pageClassName='item'
        previousClassName='item'
        nextClassName='item'
      />
    </Container>
  );
};

export default Pagination;
