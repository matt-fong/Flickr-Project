import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { updateImageThunk } from '../../store/image';
import { getAllImagesThunk } from '../../store/image';


const UpdateImage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const imageId = useParams();

  // console.log('THIS IS IMAGEID EDIT IMAGE', imageId)

  const images = useSelector(state => state.images)
  const user = useSelector(state => (state.session.user))



  const currentImage = images[imageId.imageId]

  console.log('THIS IS CURRENT IMAGE', currentImage)

  const [title, setTitle] = useState(currentImage?.title)
  const [description, setDescription] = useState(currentImage?.description)
  const [imageUrl, setImageUrl] = useState(currentImage?.imageUrl)

  const [errors, setErrors] = useState([])
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getAllImagesThunk())
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
      imageUrl: imageUrl,
      userId: user.id
    }

    return dispatch(updateImageThunk(data, imageId.imageId)).then(() => history.push(`/image/${imageId.imageId}`))

  }

  return (
    <div >
      <form onSubmit={handleSubmit} >

        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
        <label>Description</label>
          <input
            type="text"
            placeholder='Description'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
        <label>ImageUrl</label>
          <input
            type="text"
            placeholder='ImageUrl'
            value={imageUrl}
            onChange={(e) => setImageUrl(e.target.value)}
            required
          />
        </div>

        <button name="submit" type="submit" >
          Edit Image
        </button>

      </form>
    </div>
  )
}



export default UpdateImage;
