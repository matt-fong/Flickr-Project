const GET_ALL_IMAGES= 'images/GET_ALL_IMAGES'

export const getAllImagesAC = (images) => ({
  type: GET_ALL_IMAGES,
  payload: images,
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
        default:
            return state
    }
}


export default imageReducer
