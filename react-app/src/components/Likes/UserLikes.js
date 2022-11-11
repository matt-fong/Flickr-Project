import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { createLikeThunk, getAllLikesThunk } from '../../store/like';
import { getAllImagesThunk } from '../../store/image';

const UserLikes = () => {

  const user = useSelector((state) => state.session.user)
  const likes = useSelector((state) => state.likes)
  const images = useSelector((state) => state.images)

  const likesarr = Object.values(likes)
  console.log('THIS IS LIKES', likesarr)

  let testarr = [];

  for (let i = 0; i < likesarr.length; i++) {
    testarr.push(likesarr[i].imageId)
  }

  console.log('THIS IS TESTARR', testarr)

  const imagearr = Object.values(images)

  const newimagearr = [];

  for (let i = 0; i < imagearr.length; i++) {
    if (testarr.includes(imagearr[i].id)) {
      newimagearr.push(imagearr[i])
    }
  }

  console.log('THIS IS NEWIMAGEARR', newimagearr)

  const history = useHistory()
  const dispatch = useDispatch();

  const handleCreateLike = (e) => {
    e.preventDefault();

    const data = {
      userId: user.id,
      imageId: 15,
    }

    return dispatch(createLikeThunk(data))

  }

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllLikesThunk())
  }, [dispatch])

  return (
    <div onClick={handleCreateLike}>
      CREATE LIKE
    </div>
  )

}

export default UserLikes;
