import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllLikesThunk } from '../../store/like';
import { getAllImagesThunk } from '../../store/image';
import ImageCard from "../ImageCard/ImageCard";
import './YouPage.css'
import { getAllUsersThunk } from '../../store/user';
import { useHistory, useParams } from 'react-router-dom';
import image from './background.PNG'

const YouPage = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const userId = useParams();

  console.log('THIS IS USER ID', Number(userId?.userId))

  // const user = useSelector((state) => state.session.user)
  const likes = useSelector((state) => state.likes)
  const images = useSelector((state) => state.images)
  const currentUser = useSelector((state) => state.users[Number(userId?.userId)])

  const likesArr = Object.values(likes)
  const imagesArr = Object.values(images)

  const userLikes = likesArr.filter(like => like?.userId === Number(userId?.userId))
  const userImages = imagesArr.filter(image => image?.userId === Number(userId?.userId))

  let likesImageIdArr = [];

  for (let i = 0; i < userLikes.length; i++) {
    likesImageIdArr.push(userLikes[i].imageId)
  }

  const imagearr = Object.values(images)

  const userLikedImages = [];

  for (let i = 0; i < imagearr.length; i++) {
    if (likesImageIdArr.includes(imagearr[i].id)) {
      userLikedImages.push(imagearr[i])
    }
  }

  let renderImages;

  if (userImages.length > 0) {
    renderImages = (
      <div className="youPage-container">
        <div className="youPage-inner-container">
          <div className="youPage-images-container">
            {userImages.map((image) => {
              return (
                <>
                  <ImageCard image={image}/>
                </>
              );
            })}
          </div>
        </div>
      </div>
    )
  } else {
    renderImages = (
      <div className='youPage-none-container'>

        <div className='youPage-text-container'>
          <div className='youPage-text-top'>You have no public photos.</div>
          <div className='youPage-text-inner-container'>
            <div className='youPage-text-middle'>Your photostream is your public-facing portfolio. Set your photos to public using the Camera Roll to populate your photostream.</div>

          </div>
          <div className='youPage-text-inner-container'>
            <div className='youPage-button' onClick={() => history.push(`/photo/upload`)}>Upload Photo</div>
          </div>
          <div className='youPage-text-inner-container'>
            <img className='youPage-background' src={image} alt=''/>
          </div>
        </div>

      </div>
    )
  }

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllLikesThunk())
    dispatch(getAllUsersThunk())
  }, [dispatch])

  return (
    <>
      <div className='youPage-top-container'>
        <div className='youPage-image-container'>
          <img className='youPage-top' src={'https://combo.staticflickr.com/pw/images/coverphoto11_h.jpg.v3'} alt=''/>

        </div>

        <div className='youPage-inner-container'>

          <div className='youPage-inner-bottom'>
            <img className='youPage-profile' src='https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png' alt=''></img>
            <div className='youPage-info'>
              <div className='youPage-name'>{`${currentUser?.first_name} ${currentUser?.last_name}`}</div>
              <div className='youPage-username'>{currentUser?.username}</div>
            </div>
          </div>

        </div>
      </div>

      <div className='youPage-middle-container'>
        <div className='youPage-middle-text'>
          <div className='youPage-middle-photostream'>Photostream</div>
          <div className='youPage-middle-likes' onClick={() => history.push(`/you/${userId?.userId}/likes`)}>Likes</div>
        </div>
      </div>

      {renderImages}

      {/* <div className="youPage-container">
        <div className="youPage-inner-container">
          <div className="youPage-images-container">
            {userLikedImages.map((image) => {
              return (
                <>
                  <ImageCard image={image}/>
                </>
              );
            })}
          </div>
        </div>
      </div> */}
    </>
  )

}

export default YouPage;
