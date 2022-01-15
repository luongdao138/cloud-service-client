import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useClickOutside } from '../../hooks';
import { MenuContainer } from './HomePageSearch.styles';

const SearchRecommend = ({ onClose, searchData, inputRef }) => {
  const ref = useRef();
  useClickOutside(ref, (e) => {
    if (!inputRef.current?.contains(e.target)) {
      onClose();
    }
  });

  return (
    <MenuContainer ref={ref}>
      <ul>
        {searchData?.clouds?.map((i, index) => (
          <li key={i._id}>
            <Link to={`/clouds/${i._id}/reviews`}>{i.name}</Link>
          </li>
        ))}
      </ul>
    </MenuContainer>
  );
};

export default SearchRecommend;
