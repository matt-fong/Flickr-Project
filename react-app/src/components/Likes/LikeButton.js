import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { createLikeThunk, getAllLikesThunk } from '../../store/like';
import { getAllImagesThunk } from '../../store/image';
import { deleteLikeThunk } from '../../store/like';
import './LikeButton.css'

const LikeButton = ({ imageId }) => {

  const dispatch = useDispatch();

  const user = useSelector((state) => state.session.user)
  const likes = useSelector((state) => state.likes)

  const likesArr = Object.values(likes)

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllLikesThunk())
  }, [dispatch])

  const handleCreateLike = (e) => {
    e.preventDefault();

    const data = {
      userId: user.id,
      imageId: imageId,
    }

    return dispatch(createLikeThunk(data)).then(dispatch(getAllLikesThunk()))
  }

  const handleDeleteLike = (e) => {
    e.preventDefault();

    for (let i = 0; i < likesArr.length; i++) {
      if (likesArr[i]?.userId === user?.id && likesArr[i]?.imageId === Number(imageId)) {
        return dispatch(deleteLikeThunk(likesArr[i]?.id)).then(dispatch(getAllLikesThunk()))
      }
    }

  }

  const userLiked = likesArr.filter(like => like?.userId === user?.id && like?.imageId === Number(imageId))

  let conditional;

  if (userLiked.length > 0) {
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

  return (
    <div>
      {conditional}
    </div>
  )

}

export default LikeButton;
