import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import logo from './discovrlogo.jpg';
import './HomePage.css';

const HomePage = () => {

  const history = useHistory()

  const user = useSelector(state => (state.session.user))

//

  return (
    <div className='homepage-container'>

      <div className="homepage-navbar">

        <div className="homepage-navbar-left">
          {/* <div onClick={() => history.push(`/`)} exact={true}>
            Home
          </div> */}
          <img className='homepage-logo' src={logo}></img>
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

        <img className='homepage-image' src='https://wallpaperaccess.com/full/1369012.jpg'></img>

        <div className="homepage-middle-text">
          <div className="homepage-text-header">Find your inspiration.</div>
          <div className="homepage-text-body">Join the Discovr community, home to tens of billions of photos and 2 million groups.</div>
          <div className='homepage-signup-button' onClick={() => history.push(`/sign-up`)}>Start for free</div>
        </div>


        {/* {user && (
          <div className='homepage-signup-button' onClick={() => history.push(`/explore`)}>Explore</div>
        )} */}

      </div>


    </div>
  )
}

export default HomePage;
