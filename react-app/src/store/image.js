// Actions
const GET_ALL_IMAGES = 'images/GET_ALL_IMAGES'
const CREATE_IMAGE = 'images/CREATE_IMAGE'
const UPDATE_IMAGE = 'images/UPDATE_IMAGE'
const DELETE_IMAGE = 'images/DELETE_IMAGE'

// Action Creators
export const getAllImagesAC = (images) => ({
  type: GET_ALL_IMAGES,
  payload: images,
})

export const createImageAC = (image) => ({
  type: CREATE_IMAGE,
  payload: image,
})

export const updateImageAC = (image) => ({
  type: UPDATE_IMAGE,
  payload: image,
})

export const deleteImageAC = (imageId) => ({
  type: DELETE_IMAGE,
  payload: imageId,
})

// Thunks
export const getAllImagesThunk = () => async (dispatch) => {
  const res = await fetch('/api/images/');
  if (res.ok) {
    const images = await res.json()
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
    return image
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

// Reducer
const initialState = {}
const imageReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
        case GET_ALL_IMAGES:
          action.payload.forEach((image) => {
              newState[image.id] = image
          })
          return newState
        case CREATE_IMAGE:
          newState[action.payload.id] = action.payload
          return newState
        case UPDATE_IMAGE:
          newState[action.payload.id] = action.payload
          return newState
        case DELETE_IMAGE:
          delete newState[action.payload]
          return newState
        default:
          return state
    }
}


export default imageReducer;
