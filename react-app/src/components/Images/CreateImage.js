import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { createImageThunk } from '../../store/image';
import './CreateImage.css'

const CreateImage = () => {
  const dispatch = useDispatch();
  const history = useHistory();

  const user = useSelector(state => (state.session.user))

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

    return dispatch(createImageThunk(data)).then(() => history.push(`/explore`))

  }

  return (
    <>
      <div>

        <div className='create-image-navbar'>
          <div className='create-image-navbar-inner-container'>

            <div className='create-image-navbar-logo' onClick={() => history.push(`/`)} exact={true}>
              <div className="create-image-navbar-dot-container">
                <div className="create-image-navbar-bluedot">•</div>
                <div className="create-image-navbar-pinkdot">•</div>
              </div>
              <div className="create-image-navbar-discovr">discovr</div>
            </div>

          </div>
        </div>

        <div className='testinggg'>
          <form className='test1' onSubmit={handleSubmit} >

            <div>Image URL</div>
            <div>
            {/* <label>ImageUrl</label> */}
              <input
                type="text"
                placeholder='ImageUrl'
                onChange={(e) => setImageUrl(e.target.value)}
                required
              />
            </div>


            <div>Title</div>
            <div>
              {/* <label>Title</label> */}
              <input
                type="text"
                placeholder="Title"
                onChange={(e) => setTitle(e.target.value)}
                required
              />
            </div>

            <div>Description</div>
            <div>
            {/* <label>Description</label> */}
              <input
                type="text"
                placeholder='Description'
                onChange={(e) => setDescription(e.target.value)}
                required
              />
            </div>

            <button name="submit" type="submit" >
              Create Image
            </button>

          </form>
        </div>

      </div>

    </>
  )
}



export default CreateImage;
