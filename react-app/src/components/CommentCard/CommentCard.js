import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import './CommentCard.css'
import { updateCommentThunk } from '../../store/comment';
import { deleteCommentThunk } from '../../store/comment';


const CommentCard = ({ comment }) => {

  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector((state) => state.session.user)
  const users = useSelector((state) => state.users)

  const currentUser = users[comment?.userId]

  const { imageId } = useParams()

  const [body, setBody] = useState(comment?.body);
  const [editing, setEditing] = useState(false);
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect((e) => {
    let errors = [];

    if (body.length < 1 || body.length > 255) {
      errors.push('Comment must be between 1 and 255 characters.')
    }

    setErrors(errors)
  }, [body])

  const handleUpdateComment = (e) => {
    e.preventDefault();

    setSubmitted(true);

    const data = {
      body: body,
      userId: user.id,
      imageId: imageId,
    }

    if (body.length > 0 && body.length < 256) {
      return dispatch(updateCommentThunk(data, comment?.id)).then(setEditing(false))
    }

  }

  return (
    <div className='comment-card-container'>
      <img className='comment-card-pic' src='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg' alt='' onClick={() => history.push(`/you/${currentUser?.username}`)}></img>
      <div className='comment-card-right-container'>
        <div className='comment-card-name-container'>
          <div className='comment-card-first-last-name' onClick={() => history.push(`/you/${currentUser?.username}`)}>
            {`${currentUser?.first_name} ${currentUser?.last_name}`}
          </div>

          { user?.id === comment?.userId && (
            <div className='comment-card-icons'>
              {!editing &&
              <>
                <i className="comment-card-edit-button fa-solid fa-pen-to-square" onClick={() => setEditing(true)}></i>
                <i className="comment-card-delete-button fa-solid fa-trash" onClick={() => dispatch(deleteCommentThunk(comment?.id))}></i>
              </>
              }
              {editing &&
              <>
                <i className="comment-card-edit-button fa-solid fa-pen-to-square" onClick={() => setEditing(false)}></i>
                <i className="comment-card-delete-button fa-solid fa-trash" onClick={() => dispatch(deleteCommentThunk(comment?.id))}></i>
              </>
              }
          </div>
          )}

        </div>

        {editing ?
          <form>
            <textarea
              className='comment-card-edit-body'
              type='text'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

            <div className='edit-comment-button-container'>

              <div>
                {submitted && errors.map((error) => (
                  <div className='create-comment-error'>{error}</div>
                ))}
              </div>

              <button className='comment-card-button' onClick={handleUpdateComment}>Comment</button>
            </div>

          </form>
          :
          <div>
            <div className='comment-card-body'>{comment?.body}</div>
          </div>
          }

      </div>
    </div>
  );
}

export default CommentCard;
