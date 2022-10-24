import { useHistory } from "react-router-dom";
import './HomePage.css';

const HomePage = () => {

  const history = useHistory()

  return (
    <div className='homepage-container'>
      <img className='homepage-image' src='https://wallpaperaccess.com/full/1369012.jpg'></img>
        <div className='homepage-signup-button' onClick={() => history.push(`/sign-up`)}>Start for free</div>
    </div>
  )
}

export default HomePage;
