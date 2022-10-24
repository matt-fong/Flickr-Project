import React, { useState, useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import LoginForm from './components/auth/LoginForm';
import SignUpForm from './components/auth/SignUpForm';
import NavBar from './components/NavBar';
import ProtectedRoute from './components/auth/ProtectedRoute';
import UsersList from './components/UsersList';
import User from './components/User';
import { authenticate } from './store/session';
import ExplorePage from './components/ExplorePage/ExplorePage';
import CreateImage from './components/Images/CreateImage';
import UpdateImage from './components/Images/EditImage';
import ImageDetails from './components/ImageDetails/ImageDetails';
import HomePage from './components/HomePage/HomePage';

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
      <NavBar />
      <Switch>
        <Route path='/login' exact={true}>
          <LoginForm />
        </Route>
        <Route path='/sign-up' exact={true}>
          <SignUpForm />
        </Route>
        <Route path='/users' exact={true} >
          <UsersList/>
        </Route>
        <Route path='/users/:userId' exact={true} >
          <User />
        </Route>
        <Route path='/' exact={true} >
          <HomePage />
        </Route>
        <Route path='/explore'>
          <ExplorePage />
        </Route>
        <Route path='/testingcreate'>
          <CreateImage />
        </Route>
        <Route path='/testingedit'>
          <UpdateImage />
        </Route>
        <Route path='/imagedetails'>
          <ImageDetails />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
