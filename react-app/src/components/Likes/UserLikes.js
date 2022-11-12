import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllLikesThunk } from '../../store/like';
import { getAllImagesThunk } from '../../store/image';
import ImageCard from "../ImageCard/ImageCard";
import './UserLikes.css'
import { getAllUsersThunk } from '../../store/user';
import { useHistory } from 'react-router-dom';

const UserLikes = () => {

  const dispatch = useDispatch();
  const history = useHistory()

  const user = useSelector((state) => state.session.user)
  const likes = useSelector((state) => state.likes)
  const images = useSelector((state) => state.images)

  const likesArr = Object.values(likes)

  const currentUser = useSelector((state) => state.users[user?.id])

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

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllLikesThunk())
    dispatch(getAllUsersThunk())
  }, [dispatch])

  return (
    <>
      <div className='userlikes-top-container'>
        <div className='userlikes-image-container'>
          <img className='userlikes-top' src={'https://combo.staticflickr.com/pw/images/coverphoto11_h.jpg.v3'} alt=''/>

        </div>

        <div className='userlikes-inner-container'>

          <div className='userlikes-inner-bottom'>
            <img className='userlikes-profile' src='https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png' alt=''></img>
            <div className='userlikes-info'>
              <div className='userlikes-name'>{`${currentUser?.first_name} ${currentUser?.last_name}`}</div>
              <div className='userlikes-username'>{currentUser?.username}</div>
            </div>
          </div>

        </div>
      </div>

      <div className='userlikes-middle-container'>
        <div className='userlikes-middle-text'>
          <div className='userlikes-middle-photostream' onClick={() => history.push(`/you`)}>Photostream</div>
          <div className='userlikes-middle-likes'>Likes</div>
        </div>
      </div>

      <div className="userlikes-container">
        <div className="userlikes-inner-container">
          <div className="userlikes-images-container">
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

export default UserLikes;
