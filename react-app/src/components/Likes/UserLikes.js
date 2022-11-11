import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { getAllLikesThunk } from '../../store/like';
import { getAllImagesThunk } from '../../store/image';
import ImageCard from "../ImageCard/ImageCard";
import './UserLikes.css'

const UserLikes = () => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user)
  const likes = useSelector((state) => state.likes)
  const images = useSelector((state) => state.images)

  const likesArr = Object.values(likes)

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
  }, [dispatch])

  return (
    <div className="explorepage-container">
      <div className="explorepage-inner-container">
        <div className="explorepage-images-container">
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
  )

}

export default UserLikes;
