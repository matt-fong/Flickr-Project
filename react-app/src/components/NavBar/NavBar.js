import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import './NavBar.css';

const NavBar = () => {
  const history = useHistory();

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

          <div>
            <LogoutButton />
          </div>
        </div>

      </div>


    </div>
  );
}

export default NavBar;
