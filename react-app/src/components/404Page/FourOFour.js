import { useHistory} from "react-router-dom";
import './FourOFour.css'

const FourOFour = () => {
  const history = useHistory()

  return (
    <div className="FOF-container">

      <div className='FOF-image-container'>
        <div className='FOF-header'>404</div>
        <div className='FOF-body'>THE PAGE YOU WERE LOOKING FOR DOES NOT EXIST</div>
        <img className='FOF-image' src='https://i.pinimg.com/originals/19/05/f7/1905f7b877462f2cd3a0efa922faa7a2.jpg' alt=''></img>
        <div className='FOF-home-container'>
          <div className='FOF-home' onClick={() => history.push(`/explore`)}>Explore</div>

        </div>
      </div>
    </div>
  )
}

export default FourOFour;
