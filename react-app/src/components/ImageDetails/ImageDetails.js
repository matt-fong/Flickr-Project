import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { deleteImageThunk } from '../../store/image';
import { getAllImagesThunk } from '../../store/image';

// import { getAllCommentsThunk } from '../../store/comment';
import { getImageCommentsThunk } from '../../store/comment';
import { createCommentThunk } from '../../store/comment';
// import { updateCommentThunk } from '../../store/comment';
// import { deleteCommentThunk } from '../../store/comment';

import './ImageDetails.css'

const ImageDetails = () => {

  const history = useHistory()
  const dispatch = useDispatch();

  const images = useSelector(state => state.images)
  const user = useSelector(state => state.session.user)
  const comments = useSelector(state => state.comments)

  const commentsArr = Object.values(comments)

  const [isLoaded, setIsLoaded] = useState(false);

  const imageId = useParams();

  const currentImage = images[imageId.imageId]

  console.log("THESE ARE ALL THE COMMENTS", comments)


  const handleDelete = (imageId) => {
    dispatch(deleteImageThunk(imageId)).then(() => history.push(`/explore`))
  }

  const handleCreateComment = () => {

    const data = {
      body: 'TESTING CREATE COMMENT',
      userId: user.id,
      imageId: imageId.imageId,
    }

    return dispatch(createCommentThunk(data))
  }

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getImageCommentsThunk(imageId.imageId)).then(() => setIsLoaded(true))
  }, [])


  if (!isLoaded) return null

  return isLoaded && (
    <div className='image-detail-container'>

      <div className='image-detail-top'>
        <div>
          <img className='image-detail-image' src={currentImage?.imageUrl}></img>
        </div>
      </div>

      <div className='image-detail-bottom'>

        <div onClick={() => handleDelete(imageId.imageId)}>
          DELETE BUTTON
        </div>

        <div onClick={() => handleCreateComment()}>
          CREATE COMMENT TEST
        </div>

      </div>

      <div>
        {commentsArr.map((comment) => (
          <div key={comment.id}>
            <div>IMAGE ID: {comment.imageId}</div>
            <div>BODY: {comment.body}</div>
            </div>
        ))}
      </div>


    </div>
  )
}

export default ImageDetails;
