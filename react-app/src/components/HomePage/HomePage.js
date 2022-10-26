import { useHistory, NavLink } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux'
import './HomePage.css';

const HomePage = () => {

  const history = useHistory()

  const user = useSelector(state => (state.session.user))



  return (
    <div className='homepage-container'>

      <div className="homepage-navbar">

        <div className="homepage-navbar-left">
          <div onClick={() => history.push(`/`)} exact={true}>
            Home
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

      <img className='homepage-image' src='https://wallpaperaccess.com/full/1369012.jpg'></img>
        <div className='homepage-signup-button' onClick={() => history.push(`/sign-up`)}>Start for free</div>
      {user && (
        <div className='homepage-signup-button' onClick={() => history.push(`/explore`)}>Explore</div>
      )}
    </div>
  )
}

export default HomePage;
