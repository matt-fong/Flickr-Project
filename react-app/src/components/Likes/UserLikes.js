import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllLikesThunk } from '../../store/like';
import { getAllImagesThunk } from '../../store/image';
import ImageCard from "../ImageCard/ImageCard";
import './UserLikes.css'
import { getAllUsersThunk } from '../../store/user';
import { useHistory, useParams } from 'react-router-dom';
import { getAllCommentsThunk } from "../../store/comment";
import image from './background.PNG'

const UserLikes = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const username = useParams();

  const user = useSelector((state) => state.session.user)
  const images = useSelector((state) => state.images)
  const comments = useSelector(state => state.comments)
  const likes = useSelector((state) => state.likes)
  const users = useSelector((state) => state.users)

  const likesArr = Object.values(likes)

  // const currentUser = useSelector((state) => state.users[Number(userId?.userId)])

  const currentUser = Object.values(users).filter(user => user.username === username.username)[0]
  const userLikes = likesArr.filter(like => like?.userId === Number(currentUser?.id))

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
    dispatch(getAllCommentsThunk())
  }, [dispatch])

  let renderImages;

  if (userLikedImages.length > 0) {
    renderImages = (
      <div className='youPage-outer-container'>
        <div className="userlikes-container">
          <div className="userlikes-inner-container">
            <div className="userlikes-images-container">
              {userLikedImages.map((image) => {
                return (
                  <>
                    <ImageCard image={image} comments={comments} likes={likes} users={users}/>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    )
  } else if ((userLikedImages.length) === 0 && (currentUser?.id === user?.id)) {
    renderImages = (
      <div className='youPage-outer-container'>
        <div className='youPage-none-container'>

          <div className='youPage-text-container'>
            <div className='youPage-text-top'>You have no liked photos.</div>
            <div className='youPage-text-inner-container'>
              <div className='youPage-text-middle'>{`You currently have no liked photos. Explore other photos uploaded by users in the explore page.`}</div>

            </div>
            <div className='youPage-text-inner-container'>
              <div className='youPage-button' onClick={() => history.push(`/explore`)}>Explore</div>
            </div>
            <div className='youPage-text-inner-container'>
              <img className='youPage-background' src={image} alt=''/>
            </div>
          </div>

        </div>
      </div>
    )
  } else if ((userLikedImages.length) === 0 && (currentUser?.id !== user?.id)) {
    renderImages = (
      <div className='youPage-outer-container'>
        <div className='youPage-none-container'>

          <div className='youPage-text-container'>
            <div className='youPage-text-top'>{`${currentUser?.first_name} ${currentUser?.last_name} does not have any liked photos.`}</div>
            <div className='youPage-text-inner-container'>
              <div className='youPage-text-middle'>{`${currentUser?.first_name} ${currentUser?.last_name} currently has no liked photos. Explore other photos uploaded by users in the explore page.`}</div>

            </div>
            <div className='youPage-text-inner-container'>
              <div className='youPage-button' onClick={() => history.push(`/explore`)}>Explore</div>
            </div>
            <div className='youPage-text-inner-container'>
              <img className='youPage-background' src={image} alt=''/>
            </div>
          </div>

        </div>
      </div>
    )
  }

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
          <div className='userlikes-middle-photostream' onClick={() => history.push(`/you/${currentUser?.username}`)}>Photostream</div>
          <div className='userlikes-middle-likes'>Likes</div>
        </div>
      </div>

      {renderImages}

      {/* <div className="userlikes-container">
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
      </div> */}
    </>
  )

}

export default UserLikes;
