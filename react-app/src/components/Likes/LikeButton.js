import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { createLikeThunk, getAllLikesThunk } from '../../store/like';
import { getAllImagesThunk } from '../../store/image';
import { deleteLikeThunk } from '../../store/like';
import './LikeButton.css'

const LikeButton = ({ imageId }) => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user)
  const likes = useSelector((state) => state.likes)
  const images = useSelector((state) => state.images)

  const likesArr = Object.values(likes)

  let likesImageIdArr = [];
  for (let i = 0; i < likesArr.length; i++) {
    likesImageIdArr.push(likesArr[i].imageId)
  }

  const imagearr = Object.values(images)

  const userLikedImages = [];
  for (let i = 0; i < imagearr.length; i++) {
    if (likesImageIdArr.includes(imagearr[i].id)) {
      userLikedImages.push(imagearr[i])
    }
  }

  const handleCreateLike = (e) => {
    e.preventDefault();

    const data = {
      userId: user.id,
      imageId: imageId,
    }

    return dispatch(createLikeThunk(data))
  }

  const handleDeleteLike = (e) => {
    e.preventDefault();

    for (let i = 0; i < likesArr.length; i++) {
      if (likesArr[i]?.userId === user?.id && likesArr[i]?.imageId === Number(imageId)) {
        return dispatch(deleteLikeThunk(likesArr[i]?.id))
      }
    }

  }

  let conditional;

  for (let i = 0; i < likesArr.length; i++) {
    if (likesArr[i]?.userId === user?.id && likesArr[i]?.imageId === Number(imageId)) {
      conditional = (
        <div onClick={handleDeleteLike}>
          <i class="fa-solid fa-heart fa-2xl delete-like-button"></i>
        </div>
      )
    } else {
      conditional = (
        <div onClick={handleCreateLike}>
          <i class="fa-regular fa-heart fa-2xl create-like-button"></i>
        </div>
      )
    }
  }

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllLikesThunk())
  }, [dispatch])

  return (
    <div>
      {conditional}
    </div>
  )

}

export default LikeButton;
