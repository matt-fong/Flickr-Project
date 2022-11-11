import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { getAllLikesThunk } from '../../store/like';

const UserLikes = () => {

  const history = useHistory()
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllLikesThunk())
  }, [dispatch])

  return (
    <div>
      TESTING
    </div>
  )

}

export default UserLikes;
