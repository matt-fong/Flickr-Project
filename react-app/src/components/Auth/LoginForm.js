import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect, useHistory } from 'react-router-dom';
import { login } from '../../store/session';
import './LoginForm.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory()

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password)).then(history.push('/explore'));
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

  // if (user) {
  //   return <Redirect to='/' />;
  // }

  return (
    <div className='login-container'>

      <img className='login-background-image' src='https://identity.flickr.com/img/033120190455-by-Henry.26d9f56a.jpg'></img>

      <div className='login-form-container'>
        <div className='login-form-inner-container'>
          <form className='login-form' onSubmit={onLogin}>

            {/* <div>
              {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
              ))}
            </div> */}

            <div className='login-form-input-container'>
              <label htmlFor='email'>Email</label>
              <input
                className='login-input'
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
              />
            </div>

            <div className='login-form-input-container'>
              <label htmlFor='password'>Password</label>
              <input
                className='login-input'
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
              />
            </div>

            <div className='login-form-button-container'>
              <button className='login-button' type='submit'>Sign in</button>
            </div>
          </form>

        </div>

      </div>

    </div>
  );
};

export default LoginForm;
