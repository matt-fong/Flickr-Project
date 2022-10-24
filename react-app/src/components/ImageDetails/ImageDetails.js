import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useState } from 'react'
import { useHistory, useParams } from 'react-router-dom';
import { deleteImageThunk } from '../../store/image';

const ImageDetails = () => {

  const dispatch = useDispatch();

  return (
    <div onClick={() => dispatch(deleteImageThunk(4))}>
      DELETE BUTTON
    </div>
  )
}

export default ImageDetails;
