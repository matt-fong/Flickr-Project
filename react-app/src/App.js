import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/Auth/LoginForm';
import SignUpForm from './components/Auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import { authenticate } from './store/session';
import ExplorePage from './components/ExplorePage/ExplorePage';
import CreateImage from './components/Images/CreateImage';
import UpdateImage from './components/Images/EditImage';
import ImageDetails from './components/ImageDetails/ImageDetails';
import HomePage from './components/HomePage/HomePage';
import FourOFour from './components/404Page/FourOFour';
import UserLikes from './components/Likes/UserLikes';
import YouPage from './components/YouPage/YouPage';
// import ProtectedRoute from './components/Auth/ProtectedRoute';

function App() {
  const [loaded, setLoaded] = useState(false);
  const dispatch = useDispatch();

  useEffect(() => {
    (async() => {
      await dispatch(authenticate());
      setLoaded(true);
    })();
  }, [dispatch]);

  if (!loaded) {
    return null;
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path='/explore' exact={true}>
          <NavBar />
          <ExplorePage />
        </Route>
        <Route path='/photo/upload' exact={true}>
          <CreateImage />
        </Route>
        <Route path='/image/:imageId/edit' exact={true}>
          <UpdateImage />
        </Route>
        <Route path='/image/:imageId' exact={true}>
          <NavBar />
          <ImageDetails />
        </Route>
        <Route path='/you/:username/likes' exact={true}>
          <NavBar />
          <UserLikes />
        </Route>
        <Route path='/you/:username' exact={true}>
          <NavBar />
          <YouPage />
        </Route>
        <Route>
          <FourOFour />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
