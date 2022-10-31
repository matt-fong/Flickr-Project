import { useHistory } from "react-router-dom";
import { useSelector } from 'react-redux'
// import { useEffect, useState } from "react";
import './HomePage.css';

const HomePage = () => {

  const history = useHistory();

  const user = useSelector(state => (state.session.user))

  // const [index, setIndex] = useState(0);

  // if (user) {
  //   return <Redirect to='/explore' />;
  // }

  // const images = [
  //   {
  //     imageUrl:
  //       "https://uploads-ssl.webflow.com/6212e72bb840050c246ea51b/622dbb87b588c8f2069161cb_derive-japan-cody-ellingham.jpeg",
  //   },
  //   {
  //     imageUrl:
  //       "https://www.pixel4k.com/wp-content/uploads/2018/09/night-city-city-lights-metropolis-night-4k_1538067561.jpg",
  //   },
  //   {
  //     imageUrl:
  //       "https://wallpaper.dog/large/10883221.jpg",
  //   },
  // ];

  // useEffect(() => {
  //   const testing = setTimeout(() => {
  //     setIndex((index + 1) % images.length);
  //     console.log(index);
  //   }, 3000);
  //   return () => clearInterval(testing);
  // }, [index]);

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
        <img className='homepage-image' src='https://www.pixel4k.com/wp-content/uploads/2018/09/night-city-city-lights-metropolis-night-4k_1538067561.jpg' alt=''></img>
        {/* <img className="homepage-image fadeInClass" src={images[index].imageUrl} alt=""></img> */}

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
          <a href='https://github.com/matt-fong' target="_blank" rel="noopener noreferrer">Github</a>
          <a href='https://www.linkedin.com/in/matthewfongny/' target="_blank" rel="noopener noreferrer">LinkedIn</a>
          <a href="mailto:matthewfong12@gmail.com" rel="noopener noreferrer">Email</a>
        </div>
      </div>


    </div>
  )
}

export default HomePage;
