import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { deleteImageThunk } from '../../store/image';
import { getAllImagesThunk } from '../../store/image';

import { getAllCommentsThunk } from '../../store/comment';
import { getImageCommentsThunk } from '../../store/comment';
import { createCommentThunk } from '../../store/comment';
// import { updateCommentThunk } from '../../store/comment';
// import { deleteCommentThunk } from '../../store/comment';

import './ImageDetails.css'
import CommentCard from '../CommentCard/CommentCard';

const ImageDetails = () => {

  const history = useHistory()
  const dispatch = useDispatch();
  const imageId = useParams();

  const images = useSelector(state => state.images)
  const user = useSelector(state => state.session.user)
  const comments = useSelector(state => state.comments)

  const currentImage = images[imageId.imageId]

  const commentsArr = Object.values(comments)
  const filteredComments = commentsArr.filter(comment => comment.imageId === Number(imageId.imageId))

  // console.log("THESE ARE ALL THE FILTERED COMMENTS", filteredComments)

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
    dispatch(getAllCommentsThunk())
    // dispatch(getImageCommentsThunk(imageId.imageId)).then(() => setIsLoaded(true))
  }, [])


  return (
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
        {filteredComments.map((comment) => (
          <div key={comment.id}>
            <CommentCard comment={comment}/>
            </div>
        ))}
      </div>


    </div>
  )
}

export default ImageDetails;
