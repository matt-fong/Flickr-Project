import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { deleteImageThunk } from '../../store/image';
import { getAllImagesThunk } from '../../store/image';
import './ImageDetails.css'

const ImageDetails = () => {

  const dispatch = useDispatch();
  const images = useSelector(state => state.images)

  const imageId = useParams();

  const currentImage = images[imageId.imageId]

  useEffect(() => {
    dispatch(getAllImagesThunk())
  }, [])

  return (
    // <div onClick={() => dispatch(deleteImageThunk(4))}>
    //   DELETE BUTTON
    // </div>
    <div className='image-detail-container'>

      <div className='image-detail-top'>
        <div>
          <img className='image-detail-image' src={currentImage?.imageUrl}></img>
        </div>
      </div>

      <div className='image-detail-bottom'></div>

    </div>
  )
}

export default ImageDetails;
