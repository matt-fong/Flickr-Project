import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllLikesThunk } from '../../store/like';
import { getAllImagesThunk } from '../../store/image';
import ImageCard from "../ImageCard/ImageCard";
import './YouPage.css'
import { getAllUsersThunk } from '../../store/user';
import { useHistory, useParams } from 'react-router-dom';
import { getAllCommentsThunk } from "../../store/comment";
import image from './background.PNG'

const YouPage = () => {

  const dispatch = useDispatch();
  const history = useHistory();
  const username = useParams();

  const user = useSelector((state) => state.session.user)
  const images = useSelector((state) => state.images)
  const comments = useSelector(state => state.comments)
  const likes = useSelector((state) => state.likes)
  const users = useSelector((state) => state.users)

  // const currentUser = useSelector((state) => state.users[Number(userId?.userId)])

  const currentUser = Object.values(users).filter(user => user.username === username.username)[0]

  const likesArr = Object.values(likes)
  const imagesArr = Object.values(images)

  const userLikes = likesArr.filter(like => like?.userId === Number(currentUser?.id))
  const userImages = imagesArr.filter(image => image?.userId === Number(currentUser?.id))

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
                  <ImageCard image={image} comments={comments} likes={likes} users={users}/>
                </>
              );
            })}
          </div>
        </div>
      </div>
    )
  } else if ((userImages.length === 0) && (user?.id === Number(currentUser?.id))) {
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
  } else if ((userImages.length === 0) && (user?.id !== Number(currentUser?.id))) {
    renderImages = (
      <div className='youPage-none-container'>

        <div className='youPage-text-container'>
          <div className='youPage-text-top'>{`${currentUser?.first_name} ${currentUser?.last_name} has no public photos.`}</div>
          <div className='youPage-text-inner-container'>
            <div className='youPage-text-middle'>{`${currentUser?.first_name} ${currentUser?.last_name} currently does not have a public-facing portfolio. Explore other photos uploaded by users in the explore page.`}</div>
          </div>
          <div className='youPage-text-inner-container'>
            <div className='youPage-button' onClick={() => history.push(`/explore`)}>Explore</div>
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
    dispatch(getAllCommentsThunk())
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
          <div className='youPage-middle-likes' onClick={() => history.push(`/you/${currentUser?.username}/likes`)}>Likes</div>
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
