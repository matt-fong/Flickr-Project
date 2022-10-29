import React, { useState } from 'react'
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { useHistory, useParams } from 'react-router-dom';
import { updateImageThunk } from '../../store/image';
import { getAllImagesThunk } from '../../store/image';
import { logout } from '../../store/session';

const UpdateImage = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const imageId = useParams();

  const images = useSelector(state => state.images)
  const user = useSelector(state => (state.session.user))

  const currentImage = images[imageId.imageId]

  const [title, setTitle] = useState(currentImage?.title)
  const [description, setDescription] = useState(currentImage?.description)
  const [imageUrl, setImageUrl] = useState(currentImage?.imageUrl)

  const [imageUrlErrors, setImageUrlErrors] = useState([])
  const [titleErrors, setTitleErrors] = useState([])
  const [descriptionErrors, setDescriptionErrors] = useState([])

  const [submitted, setSubmitted] = useState(false);

  useEffect(() => {
    dispatch(getAllImagesThunk())
  }, [dispatch])

  useEffect(() => {
    if (currentImage) {
      setTitle(currentImage.title)
      setDescription(currentImage.description)
      setImageUrl(currentImage.imageUrl)
    }
  }, [currentImage])

  useEffect(() => {
    let imageUrlErrors = [];
    let titleErrors = [];
    let descriptionErrors = [];

    if (!imageUrl) {
      imageUrlErrors.push('Image URL is required')
    }

    if (imageUrl && !isImage(imageUrl)) {
      imageUrlErrors.push('Must be valid image URL, Ex. .jpg, .png, .jpeg')
    }

    if (title.length < 1 || title.length > 100) {
      titleErrors.push('Comment must be between 1 and 100 characters.')
    }

    if (description.length < 1 || description.length > 255) {
      descriptionErrors.push('Description must be between 1 and 255 characters.')
    }

    setImageUrlErrors(imageUrlErrors);
    setTitleErrors(titleErrors);
    setDescriptionErrors(descriptionErrors);
  }, [title, description, imageUrl])

  function isImage(url) {
    return /\.(jpg|jpeg|png|webp|avif|gif|svg)$/.test(url)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    setSubmitted(true)

    const data = {
      title: title,
      description: description,
      imageUrl: imageUrl,
      userId: user.id
    }

    if (isImage(imageUrl) &&
      title.length > 0 && title.length < 101 &&
      description.length > 0 && description.length < 256) {
      return dispatch(updateImageThunk(data, imageId.imageId)).then(() => history.push(`/image/${imageId.imageId}`))
    }

  }

  return (
    <>
      <div className='create-image-container'>

        <div className='create-image-navbar'>
          <div className='create-image-navbar-inner-container'>

            <div className='create-image-navbar-left'>
              <div className='create-image-navbar-logo' onClick={() => history.push(`/`)} exact={true}>
                <div className="create-image-navbar-dot-container">
                  <div className="create-image-navbar-bluedot">•</div>
                  <div className="create-image-navbar-pinkdot">•</div>
                </div>
                <div className="create-image-navbar-discovr">discovr</div>
              </div>

              <div className='create-image-navbar-explore' onClick={() => history.push(`/explore`)}>
                Explore
              </div>
            </div>

            <div className='create-image-navbar-right'>

              <div className='create-image-navbar-logout' onClick={() => dispatch(logout()).then(history.push('/'))}>
                Logout
              </div>

            </div>

          </div>

        </div>

        <div className='create-image-form-container'>
          <form className='create-image-form' onSubmit={handleSubmit} >

            <div className='create-image-input-container'>
              <div>
                {submitted && imageUrlErrors.map((error) => (
                  <div className='create-image-error'>{error}</div>
                ))}
              </div>
              <div className='create-image-input-header'>Image URL</div>
              <div>
                <input
                  className='create-image-input'
                  type="text"
                  placeholder='ImageUrl'
                  value={imageUrl}
                  onChange={(e) => setImageUrl(e.target.value)}
                  // required
                />
              </div>
            </div>

            <div className='create-image-input-container'>
              <div>
                {submitted && titleErrors.map((error) => (
                  <div className='create-image-error'>{error}</div>
                ))}
              </div>
              <div className='create-image-input-header'>Title</div>
              <div>
                <input
                  className='create-image-input'
                  type="text"
                  placeholder="Title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  // required
                />
              </div>

            </div>

            <div className='create-image-input-container'>
              <div>
                {submitted && descriptionErrors.map((error) => (
                  <div className='create-image-error'>{error}</div>
                ))}
              </div>
              <div className='create-image-input-header'>Description</div>
              <div className='create-image-input-inner-container'>
                <textarea
                  className='create-image-input-description'
                  type="text"
                  placeholder='Description'
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  // required
                />
              </div>
            </div>

            <div className='create-image-button-container'>
              <button className='create-image-button' name="submit" type="submit" >
                Edit Photo
              </button>
            </div>

          </form>
        </div>

      </div>

    </>
  )
}


export default UpdateImage;
