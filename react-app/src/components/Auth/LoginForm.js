import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/explore' />;
  }

  return (
    <>
      <div className='login-outer-container'>

        <div className='login-navbar'>
          <div className='login-navbar-inner-container'>

            <div className='login-navbar-logo' onClick={() => history.push(`/`)} exact={true}>
              <div className="login-navbar-dot-container">
                <div className="login-navbar-bluedot">•</div>
                <div className="login-navbar-pinkdot">•</div>
              </div>
              <div className="login-navbar-discovr">discovr</div>
            </div>

          </div>
        </div>

        <div className='login-container'>

          <img className='login-background-image' src='https://identity.flickr.com/img/033120190455-by-Henry.26d9f56a.jpg' alt=''></img>

          <div className='login-form-container'>

            <div className='login-form-inner-container'>

              <form className='login-form' onSubmit={onLogin}>

                <div className="login-form-dot-icon">
                  <div className="login-form-dot-container">
                    <div className="login-form-bluedot">•</div>
                    <div className="login-form-pinkdot">•</div>
                  </div>
                </div>

                <div className='login-form-login-container'>
                  <div className='login-form-login'>Log in to Discovr</div>
                </div>

                <div className='error-container'>
                  {errors.map((error, ind) => (
                    <div className='error-message-container'>
                      <i className="fa-solid fa-exclamation exclamation-point"></i>
                      <div key={ind}>{error.slice(error.indexOf(':') + 1)}</div>
                    </div>
                  ))}
                </div>

                <div className='login-form-input-container'>
                  {/* <label htmlFor='email'>Email</label> */}
                  <input
                    className='login-input'
                    type='text'
                    placeholder='Email'
                    value={email}
                    onChange={updateEmail}
                    required
                  />
                </div>

                <div className='login-form-input-container'>
                  {/* <label htmlFor='password'>Password</label> */}
                  <input
                    className='login-input'
                    type='password'
                    placeholder='Password'
                    value={password}
                    onChange={updatePassword}
                    required
                  />
                </div>

                <div className='login-form-button-container'>
                  <button className='login-button' type='submit'>Sign in</button>
                </div>

                <div className='login-form-button-container'>
                  <button className="login-demo-button"
                    type="submit"
                    onClick={() => {
                      setEmail("demo@aa.io");
                      setPassword("password");
                    }}>
                    Demo User
                  </button>
                </div>

                <div className='login-signup-container'>
                  <div className='login-signup-one'>Not a Discovr member?</div>
                  <div className='login-signup-two' onClick={() => history.push(`/sign-up`)}>Sign up here.</div>
                </div>

              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginForm;
