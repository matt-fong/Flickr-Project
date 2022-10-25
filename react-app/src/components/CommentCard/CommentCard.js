import { NavLink, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import './CommentCard.css'
import { updateCommentThunk } from '../../store/comment';
import { deleteCommentThunk } from '../../store/comment';


const CommentCard = ({ comment }) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.session.user)
  const users = useSelector((state) => state.users)

  const currentUser = users[user.id]

  const { imageId } = useParams()

  // console.log('THIS IS IMAGE ID', imageId)
  // console.log('THIS IS COMMENT', comment)

  const [body, setBody] = useState(comment?.body);
  const [editing, setEditing] = useState(false);

  useEffect((e) => {

  }, [])

  const handleUpdateComment = () => {

    const data = {
      body: body,
      userId: user.id,
      imageId: imageId,
    }

    setEditing(false);

    return dispatch(updateCommentThunk(data, comment?.id))
  }

  return (
    <div className='comment-card-container'>
      <img className='comment-card-pic' src='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'></img>
      <div className='comment-card-right-container'>
        <div className='comment-card-name'>{`${currentUser?.first_name} ${currentUser?.last_name}`}</div>

        {editing ?
          <form>
            <textarea
              className='comment-card-body'
              type='text'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            <button className='comment-card-button' onClick={handleUpdateComment}>Update Comment</button>
          </form>
          :
          <div>
            <div className='comment-card-body'>{comment?.body}</div>
            <button onClick={() => setEditing(true)}>edit button</button>
            <button onClick={() => dispatch(deleteCommentThunk(comment?.id))}>Delete Comment</button>
          </div>
          }
        {/* <div onClick={() => handleUpdateComment()}>UPDATE COMMENT</div> */}
      </div>
    </div>
  );
}

export default CommentCard;
