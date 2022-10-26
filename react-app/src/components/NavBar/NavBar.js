import React from 'react';
import { NavLink } from 'react-router-dom';
import LogoutButton from '../Auth/LogoutButton';
import './NavBar.css';

const NavBar = () => {
  return (
    <div className='navbar-container'>

      <div className='navbar-left'>

        <NavLink to='/' exact={true}>
          Home
        </NavLink>

        <NavLink to='/explore' exact={true}>
          Explore
        </NavLink>


      </div>

      <div className='navbar-right'>
        <div>
          <NavLink to='/photo/upload' exact={true}>
            Upload Photo
          </NavLink>
        </div>

        <div>
          <LogoutButton />
        </div>
      </div>

    </div>
  );
}

export default NavBar;
