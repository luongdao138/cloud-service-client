import { useLocation } from 'react-router-dom';
import { useNavigate, useParams } from 'react-router-dom';
import queryString from 'query-string';

const useRouter = () => {
  const params = useParams();
  const navigate = useNavigate();
  const location = useLocation();

  return {
    push: (url) => navigate(url),
    replace: (url) => navigate(url, { replace: true }),
    query: { ...queryString.parse(location.search), ...params },
    navigate,
    params,
    pathname: location.pathname,
    location,
  };
};

export default useRouter;
