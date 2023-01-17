import React from 'react';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../store/session';
import './NavBar.css';

const NavBar = () => {
  const user = useSelector((state) => state.session.user);
  const history = useHistory();
  const dispatch = useDispatch();

  const [ body, setBody ] = useState("");

  const handleSearch = (e) => {
    e.preventDefault();

    history.push(`/tags/${body}`)
    setBody("")
  }

  return (
    <div className='navbar-container'>

      <div className='navbar-inner-container'>

        <div className='navbar-left'>

          <div className='navbar-logo' onClick={() => history.push(`/explore`)} exact={true}>
            <div className="navbar-dot-container">
              <div className="navbar-bluedot">•</div>
              <div className="navbar-pinkdot">•</div>
            </div>
            <div className="navbar-discovr">discovr</div>
          </div>

          <div className='navbar-you' onClick={() => history.push(`/you/${user?.username}`)}>
            You
          </div>

          <div className='navbar-explore' onClick={() => history.push(`/explore`)}>
            Explore
          </div>

        </div>

        <div className='navbar-right'>

          <div className='navbar-search'>
            <i class="navbar-glass fa-solid fa-magnifying-glass" onClick={handleSearch}></i>
            <form>
              <input
                className='navbar-search-input'
                type="text"
                placeholder="Search photos or tags"
                value={body}
                onKeyPress={(e) => {if (e.key === "Enter") {handleSearch(e)}}}
                onChange={(e) => setBody(e.target.value)}
                />
            </form>
          </div>

          <div>
            <div className='navbar-upload-photo' onClick={() => history.push(`/photo/upload`)}>
              Upload
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
