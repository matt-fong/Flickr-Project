import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { updateImageThunk } from '../../store/image';


const UpdateImage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const imageId = useParams();

  const images = useSelector(state => state.images)
  const user = useSelector(state => (state.session.user))

  const currentImage = images[imageId.id]

  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [imageUrl, setImageUrl] = useState('')

  const [errors, setErrors] = useState([])
  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
  }, [])


  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      title: title,
      description: description,
      imageUrl: imageUrl,
      userId: user.id
    }

    return dispatch(updateImageThunk(data, 4))

  }

  return (
    <div >
      <form onSubmit={handleSubmit} >

        <div>
          <label>Title</label>
          <input
            type="text"
            placeholder="Title"
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div>
        <label>Description</label>
          <input
            type="text"
            placeholder='Description'
            onChange={(e) => setDescription(e.target.value)}
            required
          />
        </div>

        <div>
        <label>ImageUrl</label>
          <input
            type="text"
            placeholder='ImageUrl'
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
