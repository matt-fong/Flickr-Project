import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import './HomePage.css';

const HomePage = () => {

  const history = useHistory();

  const user = useSelector(state => (state.session.user))

//

  return (
    <div className='homepage-container'>

      <div className="homepage-navbar">

        <div className="homepage-navbar-left">

          <div className='homepage-navbar-logo' onClick={() => history.push(`/`)} exact={true}>
            <div className="homepage-navbar-dot-container">
              <div className="homepage-navbar-bluedot">•</div>
              <div className="homepage-navbar-pinkdot">•</div>
            </div>
            <div className="homepage-navbar-discovr">discovr</div>
          </div>

        </div>

        <div className="homepage-navbar-right">
          <div className='homepage-navbar-login' onClick={() => history.push(`/login`)}>
            Log In
          </div>
          <div className='homepage-navbar-signup' onClick={() => history.push(`/sign-up`)}>
            Sign Up
          </div>
        </div>

      </div>

      <div className="homepage-bottom-container">

        {/* <img className='homepage-image' src='https://wallpaperaccess.com/full/1369012.jpg'></img> */}
        <img className='homepage-image' src='https://www.pixel4k.com/wp-content/uploads/2018/09/night-city-city-lights-metropolis-night-4k_1538067561.jpg'></img>

        <div className="homepage-middle-text">
          <div className="homepage-text-header">Find your inspiration.</div>
          <div className="homepage-text-body">Join the Discovr community, home to tens of billions of photos and 2 million groups.</div>
          {!user && (
            <div className='homepage-signup-button' onClick={() => history.push(`/sign-up`)}>Start for free</div>
          )}
          {user && (
            <div className='homepage-signup-button' onClick={() => history.push(`/explore`)}>Explore</div>
          )}
        </div>


      </div>

      <div className="homepage-footer-container">
        <div className="homepage-footer">
          <a href='https://github.com/matt-fong' target="_blank">Github</a>
          <a href='https://www.linkedin.com/in/matthewfongny/' target="_blank">LinkedIn</a>
          <a href="mailto:matthewfong12@gmail.com">Email</a>
        </div>
      </div>


    </div>
  )
}

export default HomePage;
