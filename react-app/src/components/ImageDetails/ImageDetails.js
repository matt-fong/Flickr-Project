import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { deleteImageThunk } from '../../store/image';
import { getAllImagesThunk } from '../../store/image';
import { getAllCommentsThunk } from '../../store/comment';
import { getImageCommentsThunk } from '../../store/comment';


import './ImageDetails.css'
import CommentCard from '../CommentCard/CommentCard';
import { getAllUsersThunk } from '../../store/user';
import CreateComment from '../Comments/CreateComment';

const ImageDetails = () => {

  const history = useHistory()
  const dispatch = useDispatch();
  const imageId = useParams();

  const images = useSelector(state => state.images)
  const user = useSelector(state => state.session.user)
  const comments = useSelector(state => state.comments)
  const users = useSelector(state => state.users)

  const currentImage = images[imageId.imageId]
  const imageOwner = users[currentImage?.userId]

  console.log('this is image owner', imageOwner)

  const commentsArr = Object.values(comments)
  const filteredComments = commentsArr.filter(comment => comment.imageId === Number(imageId.imageId))

  // console.log("THESE ARE ALL THE FILTERED COMMENTS", filteredComments)

  const handleDelete = (imageId) => {
    dispatch(deleteImageThunk(imageId)).then(() => history.push(`/explore`))
  }

  useEffect(() => {
    dispatch(getAllImagesThunk())
    dispatch(getAllCommentsThunk())
    dispatch(getAllUsersThunk())
    // dispatch(getImageCommentsThunk(imageId.imageId)).then(() => setIsLoaded(true))
  }, [])


  return (
    <div className='image-detail-container'>

      <div className='image-detail-top'>

        <div className='image-detail-image-container'>
          <img className='image-detail-image' src={currentImage?.imageUrl}></img>
          {/* <div className='image-detail-title'>{currentImage?.title}</div> */}
        </div>

        { user?.id === currentImage?.userId && (
          <div>
            <i class="image-detail-update-button fa-solid fa-pen-to-square fa-2xl"
              onClick={() => history.push(`/image/${imageId.imageId}/edit`)}></i>

            <i class="image-detail-delete-button fa-solid fa-trash fa-2xl"
              onClick={() => handleDelete(imageId.imageId)}></i>
          </div>
        )}



      </div>

      <div className='image-detail-bottom'>

        <div className='image-detail-inner-bottom'>

          <div className='image-detail-bottom-left'>
            <div className='image-detail-user-card'>

              <div className='image-detail-user-card-pic-container'>
                <img className='image-detail-user-card-pic' src='https://www.seekpng.com/png/full/73-730482_existing-user-default-avatar.png'></img>
              </div>

              <div className='image-detail-user-card-right'>
                <div className='image-detail-user-card-name'>{`${imageOwner?.first_name} ${imageOwner?.last_name}`}</div>
                <div className='image-detail-user-card-title'>{currentImage?.title}</div>
                <div className='image-detail-user-card-description'>{currentImage?.description}</div>
              </div>

            </div>


            <div className='image-detail-comment-card-container'>
            <div className='image-detail-comment-header'>{`Comments (${filteredComments?.length})`}</div>
              {filteredComments.map((comment) => (
                <div key={comment.id}>
                  <CommentCard comment={comment}/>
                  </div>
              ))}
            </div>

            <div>
              <CreateComment imageId={imageId?.imageId}/>
            </div>

          </div>

          <div className='image-detail-bottom-right'></div>


        </div>

      </div>


    </div>
  )
}

export default ImageDetails;
