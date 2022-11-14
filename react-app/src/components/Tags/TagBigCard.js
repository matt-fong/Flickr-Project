import { useHistory } from 'react-router-dom';
import './TagBigCard.css'

const TagBigCard = ({ tag }) => {

  const history = useHistory();

  return (
    <div className='tagbigcard-container' onClick={() => history.push(`/tag/${tag?.name}`)}>
      <img className='tagbigcard-pic' src='https://www.pixel4k.com/wp-content/uploads/2018/09/night-city-city-lights-metropolis-night-4k_1538067561.jpg'></img>
      <div className='tagbigcard-text'>{tag?.name}</div>
    </div>
  )
}

export default TagBigCard;
