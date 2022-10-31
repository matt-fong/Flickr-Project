import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { Redirect, useHistory } from 'react-router-dom';
import { signUp } from '../../store/session';

const SignUpForm = () => {
  const [first_name, setFirst_Name] = useState('');
  const [last_name, setLast_Name] = useState('');
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();
  const history = useHistory();
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword &&
      first_name.length >= 2 && last_name.length <= 50 &&
      username.length >= 2 && username.length <= 50 &&
      email.length >= 2 && email.length <= 50 &&
      password.length >= 2 && password.length <= 50) {
      const data = await dispatch(signUp(first_name, last_name, username, email, password));
      if (data) {
        setErrors(data)
      }
    }

    if (password !== repeatPassword) {
      setErrors(['password: Passwords do not match'])
    }

    setSubmitted(true);
  };

  useEffect(() => {
    let errors = [];

    if (first_name.length < 2 || first_name.length > 50) {
      errors.push("first name: First name must be between 2 and 50 characters.")
    }
    if (last_name.length < 2 || last_name.length > 50) {
      errors.push("last name: Last name must be between 2 and 50 characters.")
    }
    if (email.length < 2 || email.length > 50) {
      errors.push("email: Email must be between 2 and 50 characters.")
    }
    if (username.length < 2 || username.length > 50) {
      errors.push("username: Username must be between 2 and 50 characters.")
    }
    if (password.length < 6 || password.length > 50) {
      errors.push('password: Password must be between 6 and 50 characters.');
    }

    setErrors(errors);
  }, [first_name, last_name, email, username, password, repeatPassword]);

  const updateFirstname = (e) => {
    setFirst_Name(e.target.value);
  };

  const updateLastname = (e) => {
    setLast_Name(e.target.value);
  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/explore' />;
  }

  return (
    <>
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

            <form className='login-form' onSubmit={onSignUp}>

              <div className="login-form-dot-icon">
                <div className="login-form-dot-container">
                  <div className="login-form-bluedot">•</div>
                  <div className="login-form-pinkdot">•</div>
                </div>
              </div>

              <div className='login-form-login-container'>
                <div className='login-form-login'>Sign up for Discovr</div>

              </div>

              <div className='error-container'>
                {submitted && errors.map((error, ind) => (
                  <div className='error-message-container'>
                    <i class="fa-solid fa-exclamation exclamation-point"></i>
                    <div key={ind}>{error.slice(error.indexOf(':') + 1)}</div>
                  </div>
                ))}
              </div>

              <div className='login-form-input-container'>
                {/* <label className='label'>First Name</label> */}
                <input
                  className='login-input'
                  type='text'
                  placeholder='First Name'
                  // name='first name'
                  onChange={updateFirstname}
                  value={first_name}
                  required
                ></input>
              </div>

              <div className='login-form-input-container'>
                {/* <label className='label'>Last Name</label> */}
                <input
                  className='login-input'
                  type='text'
                  placeholder='Last Name'
                  // name='last name'
                  onChange={updateLastname}
                  value={last_name}
                  required
                  ></input>
              </div>

              <div className='login-form-input-container'>
                {/* <label>First Name</label> */}
                <input
                  className='login-input'
                  type='text'
                  placeholder='Username'
                  // name='first name'
                  onChange={updateUsername}
                  value={username}
                  required
                ></input>
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

              <div className='login-form-input-container'>
                {/* <label htmlFor='password'>Password</label> */}
                <input
                  className='login-input'
                  type='password'
                  placeholder='Confirm Password'
                  value={repeatPassword}
                  onChange={updateRepeatPassword}
                  required
                />
              </div>

              <div className='login-form-button-container'>
                <button className='login-button' type='submit'>Sign up</button>
              </div>

              <div className='login-signup-container'>
                <div className='login-signup-one'>Already a Discovr member?</div>
                <div className='login-signup-two' onClick={() => history.push(`/login`)}>Log in here.</div>
              </div>

            </form>

          </div>

        </div>

      </div>
    </>
  );

  // return (
  //   <form onSubmit={onSignUp}>
  //     <div>
  //       {errors.map((error, ind) => (
  //         <div key={ind}>{error}</div>
  //       ))}
  //     </div>
  //     <div>
  //       <label>First Name</label>
  //       <input
  //         type='text'
  //         name='first name'
  //         onChange={updateFirstname}
  //         value={first_name}
  //       ></input>
  //     </div>
  //     <div>
  //       <label>Last Name</label>
  //       <input
  //         type='text'
  //         name='last name'
  //         onChange={updateLastname}
  //         value={last_name}
  //       ></input>
  //     </div>
  //     <div>
  //       <label>User Name</label>
  //       <input
  //         type='text'
  //         name='username'
  //         onChange={updateUsername}
  //         value={username}
  //       ></input>
  //     </div>
  //     <div>
  //       <label>Email</label>
  //       <input
  //         type='text'
  //         name='email'
  //         onChange={updateEmail}
  //         value={email}
  //       ></input>
  //     </div>
  //     <div>
  //       <label>Password</label>
  //       <input
  //         type='password'
  //         name='password'
  //         onChange={updatePassword}
  //         value={password}
  //       ></input>
  //     </div>
  //     <div>
  //       <label>Repeat Password</label>
  //       <input
  //         type='password'
  //         name='repeat_password'
  //         onChange={updateRepeatPassword}
  //         value={repeatPassword}
  //         required={true}
  //       ></input>
  //     </div>
  //     <button type='submit'>Sign Up</button>
  //   </form>
  // );
};

export default SignUpForm;
