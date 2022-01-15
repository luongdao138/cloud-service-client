import { createContext, useContext, useReducer } from 'react';

const AuthContext = createContext();

const initialState = {
  openAuthModal: false,
  type: 'login',
  mode: 'linkedin',
  user: null,
  redirect_url: null,
  token: localStorage.getItem('cloud_token'),
  isLoading: !!localStorage.getItem('cloud_token'),
};

export const actions = {
  TOGGLE_MODAL: 'toggle_modal',
  TOGGLE_TYPE: 'toggle_type',
  TOGGLE_MODE: 'toggle_mode',
  LOGIN_SUCCESS: 'login_success',
  LOG_OUT: 'log_out',
  TOGGLE_LOADING: 'toggle_loading',
  UPDATE_REDIRECT_URL: 'update_redirect_url',
};

const reducer = (state, { type, payload, redirect_url }) => {
  switch (type) {
    case actions.TOGGLE_MODAL:
      return { ...state, openAuthModal: payload };

    case actions.TOGGLE_MODE:
      return { ...state, mode: payload };

    case actions.TOGGLE_TYPE:
      return { ...state, type: payload };

    case actions.TOGGLE_LOADING:
      return { ...state, isLoading: payload };

    case actions.UPDATE_REDIRECT_URL:
      return { ...state, redirect_url: payload };

    case actions.LOGIN_SUCCESS:
      return { ...state, ...payload, redirect_url: null };

    case actions.LOG_OUT:
      return initialState;
    default:
      return state;
  }
};

const AuthProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  return <AuthContext.Provider value={{ ...state, dispatch }}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => useContext(AuthContext);
export default AuthProvider;
