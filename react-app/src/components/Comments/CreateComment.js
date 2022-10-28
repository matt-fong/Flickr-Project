import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import './CreateComment.css'
import { createCommentThunk } from '../../store/comment';


const CreateComment = ({ imageId }) => {

  const dispatch = useDispatch()

  const user = useSelector((state) => state.session.user)

  const [body, setBody] = useState("");
  const [errors, setErrors] = useState([]);
  const [submitted, setSubmitted] = useState(false);

  useEffect((e) => {
    let errors = [];

    if (body.length < 1 || body.length > 255) {
      errors.push('Comment must be between 1 and 255 characters.')
    }

    setErrors(errors)

  }, [body])

  const handleCreateComment = (e) => {
    e.preventDefault();

    setSubmitted(true);

    const data = {
      body: body,
      userId: user.id,
      imageId: imageId,
    }

    if (body.length > 0 && body.length < 256) {
      return dispatch(createCommentThunk(data)).then(setBody("")).then(setSubmitted(false))
    }

  }

  return (
    <div className='create-comment-container'>
      <img className='create-comment-pic' src='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg' alt=''></img>
      <div className='create-comment-right-container'>
        {/* <div className='create-comment-name'>{`${currentUser?.first_name} ${currentUser?.last_name}`}</div> */}

        <form>
          <textarea
            className='create-comment-body'
            type='text'
            value={body}
            onChange={(e) => setBody(e.target.value)}
            />

        </form>

        <div className='create-comment-button-container'>

          <div>
            {submitted && errors.map((error) => (
              <div className='create-comment-error'>{error}</div>
            ))}
          </div>

          <button className='create-comment-button' onClick={handleCreateComment}>Comment</button>
        </div>

      </div>
    </div>
  );
}

export default CreateComment;
