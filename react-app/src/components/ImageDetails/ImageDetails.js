import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { deleteImageThunk } from '../../store/image';
import { getAllImagesThunk } from '../../store/image';
import './ImageDetails.css'

const ImageDetails = () => {

  const history = useHistory()
  const dispatch = useDispatch();

  const images = useSelector(state => state.images)

  const imageId = useParams();

  const currentImage = images[imageId.imageId]

  const handleDelete = (imageId) => {
    dispatch(deleteImageThunk(imageId)).then(() => history.push(`/explore`))
  }

  useEffect(() => {
    dispatch(getAllImagesThunk())
  }, [])

  return (
    <div className='image-detail-container'>

      <div className='image-detail-top'>
        <div>
          <img className='image-detail-image' src={currentImage?.imageUrl}></img>
        </div>
      </div>

      <div className='image-detail-bottom'>
        
      </div>

      <div onClick={() => handleDelete(imageId.imageId)}>
        DELETE BUTTON
      </div>

    </div>
  )
}

export default ImageDetails;
