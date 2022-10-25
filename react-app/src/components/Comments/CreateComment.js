import { NavLink, useHistory, useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react';
import './CreateComment.css'
import { updateCommentThunk } from '../../store/comment';
import { createCommentThunk } from '../../store/comment';


const CreateComment = ({ imageId }) => {

  const history = useHistory()
  const dispatch = useDispatch()

  const user = useSelector((state) => state.session.user)
  const users = useSelector((state) => state.users)

  const currentUser = users[user.id]

  const [body, setBody] = useState("");

  // const { imageId } = useParams()

  console.log('THIS IS IMAGE ID', imageId)

  // console.log('THIS IS IMAGE ID', imageId)
  // console.log('THIS IS COMMENT', comment)


  useEffect((e) => {

  }, [])

  const handleCreateComment = () => {

    const data = {
      body: body,
      userId: user.id,
      imageId: imageId,
    }

    setBody("");

    return dispatch(createCommentThunk(data))
  }


  return (
    <div className='create-comment-container'>
      <img className='create-comment-pic' src='https://icon-library.com/images/default-user-icon/default-user-icon-13.jpg'></img>
      <div className='create-comment-right-container'>
        <div className='create-comment-name'>{`${currentUser?.first_name} ${currentUser?.last_name}`}</div>


          <form>
            <textarea
              className='create-comment-body'
              type='text'
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />

          </form>

          <button className='create-comment-button' onClick={handleCreateComment}>Create Comment</button>

        {/* <div onClick={() => handleUpdateComment()}>UPDATE COMMENT</div> */}
      </div>
    </div>
  );
}

export default CreateComment;
