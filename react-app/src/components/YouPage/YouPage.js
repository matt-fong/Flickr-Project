import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllLikesThunk } from '../../store/like';
import { getAllImagesThunk } from '../../store/image';
import ImageCard from "../ImageCard/ImageCard";
import './YouPage.css'
import { getAllUsersThunk } from '../../store/user';
import { useHistory } from 'react-router-dom';

const YouPage = () => {

  const dispatch = useDispatch();
  const history = useHistory()

  const user = useSelector((state) => state.session.user)
  const likes = useSelector((state) => state.likes)
  const images = useSelector((state) => state.images)

  const likesArr = Object.values(likes)

  const currentUser = useSelector((state) => state.users[user?.id])
  console.log('currentUser', currentUser)

  const userLikes = likesArr.filter(like => like?.userId === user?.id)

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

  console.log('THIS IS LIKESARR', likesArr)
  console.log('THIS IS USERLIKES', userLikes)
  console.log('THIS IS USERLIKEDIMAGES', userLikedImages)

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllLikesThunk())
    dispatch(getAllUsersThunk())
  }, [dispatch])

  return (
    <>
      <div className='youPage-top-container'>
        <div className='youPage-image-container'>
          <img className='youPage-top' src={'https://combo.staticflickr.com/pw/images/coverphoto11_h.jpg.v3'} />

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
          <div className='youPage-middle-likes' onClick={() => history.push(`/you/likes`)}>Likes</div>
        </div>
      </div>

      <div className="youPage-container">
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
      </div>
    </>
  )

}

export default YouPage;
