import { useHistory } from 'react-router-dom';
import './TagBigCard.css'

const TagBigCard = ({ tag }) => {

  const history = useHistory();

  const images = [
    'https://www.pixel4k.com/wp-content/uploads/2018/09/night-city-city-lights-metropolis-night-4k_1538067561.jpg',
    'https://uploads-ssl.webflow.com/6212e72bb840050c246ea51b/622dbb87b588c8f2069161cb_derive-japan-cody-ellingham.jpeg',
    'https://photographylife.com/wp-content/uploads/2016/06/Mass.jpg',
    'https://iso.500px.com/wp-content/uploads/2014/07/big-one.jpg',
    'https://shotkit.com/wp-content/uploads/2020/08/night-landscape-photography-featured.jpg',
  ]

  const randomNum = Math.floor(Math.random() * images.length)

  const randomImage = images[randomNum]

  return (
    <div className='tagbigcard-container' onClick={() => history.push(`/tag/${tag?.name}`)}>
      <img className='tagbigcard-pic' src={randomImage}></img>
      <div className='tagbigcard-text'>{tag?.name}</div>
    </div>
  )
}

export default TagBigCard;
