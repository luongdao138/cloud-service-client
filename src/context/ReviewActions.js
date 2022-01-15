import { useContext, useReducer, createContext, useEffect } from 'react';
import { useRouter } from '../hooks';
import { useQuery } from 'react-query';
import { getCloudReviews } from '../api/cloud';

const ReviewsActionContext = createContext();

const initialState = {
  sort: '-published_at',
  companySizeList: [],
  ratingList: [],
  industryList: [],
  pagination: {},
  search: '',
  stats: {},
};

export const actions = {
  CHANGE_SORT: 'change_sort',
  CHANGE_SEARCH: 'change_search',
  CHANGE_COMPANY_SIZE: 'change_company_size',
  CHANGE_RATING: 'change_rating',
  CHANGE_INDUSTRY: 'change_industry',
  CHANGE_PAGINATION: 'change_pagination',
  CLEAR_ALL: 'clear_all',
};

const reducer = (state, { type, payload }) => {
  switch (type) {
    case actions.CHANGE_SORT:
      return { ...state, sort: payload };

    case actions.CHANGE_SEARCH:
      return { ...state, search: payload };

    case actions.CHANGE_COMPANY_SIZE:
      const isExist = state.companySizeList.includes(payload);
      const newCompanyList = isExist
        ? [...state.companySizeList].filter((x) => x !== payload)
        : [...state.companySizeList, payload];
      return { ...state, companySizeList: newCompanyList };

    case actions.CHANGE_RATING:
      const isExist2 = state.ratingList.includes(payload);
      const newRatingList = isExist2
        ? [...state.ratingList].filter((x) => x !== payload)
        : [...state.ratingList, payload];
      return { ...state, ratingList: newRatingList };

    case actions.CHANGE_INDUSTRY:
      const isExist3 = state.industryList.includes(payload);
      const newIndustryList = isExist3
        ? [...state.industryList].filter((x) => x !== payload)
        : [...state.industryList, payload];
      return { ...state, industryList: newIndustryList };

    case actions.CHANGE_PAGINATION:
      return { ...state, ...payload };

    case actions.CLEAR_ALL:
      return { ...state, companySizeList: [], ratingList: [], industryList: [] };
    default:
      return state;
  }
};

const convertParams = (state) => {
  let params = {};
  params.sort = state.sort;
  params.fields = '-crawl,-cloud_platform';
  if (state.search) {
    params.search = state.search;
  }

  if (state.companySizeList.length) {
    params.companySizeList = state.companySizeList.join(',');
  }

  if (state.industryList.length) {
    params.industryList = state.industryList.join(',');
  }

  if (state.ratingList.length) {
    params.ratingList = state.ratingList.join(',');
  }

  params.page = state.pagination.page || 1;
  params.limit = state.pagination.limit || 10;

  return params;
};

const ReviewActionsProvider = ({ children }) => {
  const { query } = useRouter();
  const [state, dispatch] = useReducer(reducer, initialState);
  const params = convertParams(state);

  const { data, isLoading, isError, error, isPreviousData } = useQuery(
    ['reviews', 'list', params],
    () => getCloudReviews(query.cloudId, params),
    {
      staleTime: 60 * 1000,
      retry: 1,
      notifyOnChangeProps: 'tracked',
      keepPreviousData: true,
      onSuccess: (data) => {
        dispatch({
          type: actions.CHANGE_PAGINATION,
          payload: { pagination: data.pagination, stats: data.stats },
        });
      },
    }
  );

  useEffect(() => {
    if (data) {
      dispatch({
        type: actions.CHANGE_PAGINATION,
        payload: { pagination: data.pagination, stats: data.stats },
      });
    }
  }, [data]);

  const total_filters =
    state.companySizeList.length + state.industryList.length + state.ratingList.length;

  return (
    <ReviewsActionContext.Provider
      value={{
        ...state,
        dispatch,
        total_filters,
        cloudId: query.cloudId,
        reviews: data?.reviews,
        isLoading,
        isError,
        error,
        isPreviousData,
      }}
    >
      {children}
    </ReviewsActionContext.Provider>
  );
};

export const useReviewContext = () => useContext(ReviewsActionContext);
export default ReviewActionsProvider;
