import React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import './NavBar.css';

const NavBar = () => {
  const history = useHistory();
  const dispatch = useDispatch();

  return (
    <div className='navbar-container'>

      <div className='navbar-inner-container'>

        <div className='navbar-left'>

          <div className='navbar-logo' onClick={() => history.push(`/`)} exact={true}>
            <div className="navbar-dot-container">
              <div className="navbar-bluedot">•</div>
              <div className="navbar-pinkdot">•</div>
            </div>
            <div className="navbar-discovr">discovr</div>
          </div>

          <div className='navbar-explore' onClick={() => history.push(`/explore`)}>
            Explore
          </div>

        </div>

        <div className='navbar-right'>
          <div>
            <div className='navbar-upload-photo' onClick={() => history.push(`/photo/upload`)}>
              Upload Photo
            </div>
          </div>

          <div className='navbar-logout' onClick={() => dispatch(logout()).then(history.push('/'))}>
            Logout
          </div>
        </div>

      </div>


    </div>
  );
}

export default NavBar;
