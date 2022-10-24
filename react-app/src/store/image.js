const GET_ALL_IMAGES= 'images/GET_ALL_IMAGES'
const CREATE_ALL_IMAGES= 'images/CREATE_ALL_IMAGES'
const UPDATE_ALL_IMAGES= 'images/UPDATE_ALL_IMAGES'
const DELETE_ALL_IMAGES= 'images/DELETE_ALL_IMAGES'

export const getAllImagesAC = (images) => ({
  type: GET_ALL_IMAGES,
  payload: images,
})

export const createImageAC = (image) => ({
  type: CREATE_ALL_IMAGES,
  payload: image,
})

export const updateImageAC = (image) => ({
  type: UPDATE_ALL_IMAGES,
  payload: image,
})

export const deleteImageAC = (imageId) => ({
  type: DELETE_ALL_IMAGES,
  payload: imageId,
})

export const getAllImagesThunk = () => async (dispatch) => {
  const res = await fetch('/api/images/');
  if (res.ok) {
    const images = await res.json()
    console.log('this is images', images.images)
    dispatch(getAllImagesAC(images.images))
    return images
  }
}

export const createImageThunk = (image) => async (dispatch) => {
  const res = await fetch(`/api/images/create_image`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(image)
  })
  if (res.ok) {
    const image = await res.json()
    dispatch(createImageAC(image))
    return res
  }
}

export const updateImageThunk = (image, imageId) => async (dispatch) => {
  const res = await fetch(`/api/images/${imageId}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(image)
  })
  if (res.ok) {
      const image = await res.json()
      dispatch(updateImageAC(image))
      return res
  }
}

export const deleteImageThunk = (imageId) => async (dispatch) => {
  const res = await fetch(`/api/images/${imageId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
  })
  if (res.ok) {
      dispatch(deleteImageAC(imageId))
      return res
  }
}


const initialState = {}
const imageReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case GET_ALL_IMAGES:
          action.payload.forEach((image) => {
              newState[image.id] = image
          })
          console.log('this is action', action)
          console.log('this is new state', newState)
          return newState
        case CREATE_ALL_IMAGES:
          newState[action.payload.id] = action.payload
          return newState
        case UPDATE_ALL_IMAGES:
          newState[action.payload.id] = action.payload
          return newState
        case DELETE_ALL_IMAGES:
          delete newState[action.payload]
          return newState
        default:
          return state
    }
}


export default imageReducer
