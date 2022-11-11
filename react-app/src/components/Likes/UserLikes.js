import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { createLikeThunk, getAllLikesThunk } from '../../store/like';
import { getAllImagesThunk } from '../../store/image';
import { deleteLikeThunk } from '../../store/like';
import './UserLikes.css'

const UserLikes = ({ imageId }) => {

  const user = useSelector((state) => state.session.user)
  const likes = useSelector((state) => state.likes)
  const images = useSelector((state) => state.images)

  // console.log("THIS IS THE IMAGE ID", imageId)

  const likesarr = Object.values(likes)
  console.log('THIS IS LIKES', likesarr)

  let testarr = [];

  for (let i = 0; i < likesarr.length; i++) {
    testarr.push(likesarr[i].imageId)
  }

  // console.log('THIS IS TESTARR', testarr)

  const imagearr = Object.values(images)

  const newimagearr = [];

  for (let i = 0; i < imagearr.length; i++) {
    if (testarr.includes(imagearr[i].id)) {
      newimagearr.push(imagearr[i])
    }
  }

  // console.log('THIS IS FINALNEWIMAGEARR', newimagearr)

  const history = useHistory()
  const dispatch = useDispatch();

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

    for (let i = 0; i < likesarr.length; i++) {
      if (likesarr[i]?.userId === user?.id && likesarr[i]?.imageId === Number(imageId)) {
        return dispatch(deleteLikeThunk(likesarr[i]?.id))
      }
    }

  }

  let conditional;

  for (let i = 0; i < likesarr.length; i++) {
    // console.log('THIS IS ITERATION', likesarr[i])
    // console.log('THIS IS LIKES USERID', likesarr[i]?.userId)
    // console.log('THIS IS USER ID', user?.id)
    // console.log('THIS IS LIKES IMAGE ID', likesarr[i]?.imageId)
    // console.log('THIS IS IMAGE ID', imageId)
    if ((likesarr[i]?.userId === user?.id) && (likesarr[i]?.imageId === Number(imageId))) {
      console.log('THIS IS TRUE')
    } else {
      console.log('THIS IS FALSE')
    }
  }


  for (let i = 0; i < likesarr.length; i++) {
    if (likesarr[i]?.userId === user?.id && likesarr[i]?.imageId === Number(imageId)) {
      conditional = (
        <div onClick={handleDeleteLike}>
          <i class="fa-solid fa-heart">DELETE</i>
        </div>
      )
    } else {
      conditional = (
        <div onClick={handleCreateLike}>
          <i class="fa-regular fa-heart fa-2xl yessir"></i>
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

export default UserLikes;
