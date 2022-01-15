import GlobalStyle from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import {
  AddReviewPage,
  AuthPage,
  CloudReviewsPage,
  CloudServicePage,
  EditProfilePage,
  HomePage,
  Layout,
  ProfilePage,
  ProfilePrivacyPage,
  ProfileReviewsPage,
  EditReviewPage,
} from './pages';
import 'react-loading-skeleton/dist/skeleton.css';
import AuthProvider from './context/AuthContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <AuthProvider>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<HomePage />} />
          <Route path='clouds' element={<CloudServicePage />} />
          <Route path='auth' element={<AuthPage />} />
          <Route path='clouds/:cloudId/reviews' element={<CloudReviewsPage />} />
          <Route path='reviews/new' element={<AddReviewPage />} />
          <Route path='reviews/:id/edit' element={<EditReviewPage />} />
          <Route path='profile' element={<ProfilePage />}>
            <Route index element={<EditProfilePage />} />
            <Route path='profile' element={<EditProfilePage />} />
            <Route path='reviews' element={<ProfileReviewsPage />} />
            <Route path='privacy' element={<ProfilePrivacyPage />} />
          </Route>
        </Route>
      </Routes>
      <ToastContainer theme='colored' autoClose={2500} />
      <GlobalStyle />
    </AuthProvider>
  );
};

export default App;
