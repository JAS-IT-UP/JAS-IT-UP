import { useContext, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import SignUpPage from './pages/SignUp';
import LoginPage from './pages/Login';
import SiteHeadingAndNav from './components/SiteHeadingAndNav';
import SiteFooterAndFooterNav from './components/SiteFooterAndFooterNav';
import NotFoundPage from './pages/NotFound';
import UserContext from './contexts/current-user-context';
import { checkForLoggedInUser } from './adapters/auth-adapter';
import UsersPage from './pages/Users';
import UsernameUpdate from './pages/UsernameUpdate';
import UserPage from './pages/User';
import CreatePostPage from './pages/CreatePost';
import ExplorePage from './pages/Explore';
import 'bootstrap/dist/css/bootstrap.min.css';
import Tutorial from './pages/Tutorial';

export default function App() {
  const { setCurrentUser } = useContext(UserContext);
  useEffect(() => {
    checkForLoggedInUser().then(setCurrentUser);
  }, [setCurrentUser]);

  return <>
    <SiteHeadingAndNav />
    <main>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/explore' element={<ExplorePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/sign-up' element={<SignUpPage />} />
        <Route path='/update-username' element={<UsernameUpdate />} />
        <Route path='/create-post' element={<CreatePostPage />} />
        <Route path='/user/:id' element={<UserPage />} />
        <Route path='*' element={<NotFoundPage />} />
        <Route path="/tutorial" element={<Tutorial />} />
      </Routes>
    </main>
    <SiteFooterAndFooterNav />
  </>;
}
