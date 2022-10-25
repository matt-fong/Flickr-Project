import { NavLink, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import './CommentCard.css'


const CommentCard = ({ comment }) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.session.user)
  const users = useSelector((state) => state.users)

  const currentUser = users[user.id]

  const { imageId } = useParams()

  useEffect((e) => {

  }, [])



  return (
    <div className='comment-card-container'>
      <img className='comment-card-pic' src='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'></img>
      <div className='comment-card-right-container'>
        <div className='comment-card-name'>{`${currentUser?.first_name} ${currentUser?.last_name}`}</div>
        <div className='comment-card-body'>{comment?.body}</div>
      </div>
    </div>
  );
}

export default CommentCard;
