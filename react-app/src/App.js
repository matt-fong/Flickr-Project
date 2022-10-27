import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/Auth/LoginForm';
import SignUpForm from './components/Auth/SignUpForm';
import NavBar from './components/NavBar/NavBar';
import ProtectedRoute from './components/Auth/ProtectedRoute';
import { authenticate } from './store/session';
import ExplorePage from './components/ExplorePage/ExplorePage';
import CreateImage from './components/Images/CreateImage';
import UpdateImage from './components/Images/EditImage';
import ImageDetails from './components/ImageDetails/ImageDetails';
import HomePage from './components/HomePage/HomePage';
import CommentCard from './components/CommentCard/CommentCard';
import CreateComment from './components/Comments/CreateComment';

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
      {/* <NavBar /> */}
      <Switch>
        <Route path='/login' exact={true}>
          {/* <NavBar /> */}
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          {/* <NavBar /> */}
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
          <NavBar />
          <CreateImage />
        </Route>
        <Route path='/image/:imageId/edit' exact={true}>
          <NavBar />
          <UpdateImage />
        </Route>
        <Route path='/image/:imageId' exact={true}>
          <NavBar />
          <ImageDetails />
        </Route>
        <Route path='/commentcard' exact={true}>
          <NavBar />
          <CommentCard />
        </Route>
        <Route path='/createcomment' exact={true}>
          <NavBar />
          <CreateComment />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
