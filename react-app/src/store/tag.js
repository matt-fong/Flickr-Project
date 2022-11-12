// Actions
const GET_ALL_TAGS = 'tags/GET_ALL_TAGS'
const CREATE_TAG = 'tags/CREATE_TAG'
const DELETE_TAG = 'tags/DELETE_TAG'

// Action Creators
export const getAllTagsAC = (tags) => ({
  type: GET_ALL_TAGS,
  payload: tags,
})

export const createTagAC = (tag) => ({
  type: CREATE_TAG,
  payload: tag,
})

export const deleteTagAC = (tagId) => ({
  type: DELETE_TAG,
  payload: tagId,
})

// Thunks
export const getAllTagsThunk = () => async (dispatch) => {
  const res = await fetch('/api/tags/');
  if (res.ok) {
    const tags = await res.json()
    dispatch(getAllTagsAC(tags.tags))
    return tags
  }
}

export const createTagThunk = (tag) => async (dispatch) => {
  const res = await fetch(`/api/tags/create_tag`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(tag)
  })
  if (res.ok) {
    const tag = await res.json()
    dispatch(createTagAC(tag))
    return tag
  }
}

export const deleteTagThunk = (tagId) => async (dispatch) => {
  const res = await fetch(`/api/tags/${tagId}`, {
    method: 'DELETE',
  })
  if (res.ok) {
    dispatch(deleteTagAC(tagId))
    return tagId
  }
}

// Reducer
const initialState = {}
const tagsReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
      case GET_ALL_TAGS:
        action.payload.forEach(tag => {
          newState[tag.id] = tag
        })
        return newState
      case CREATE_TAG:
        newState[action.payload.id] = action.payload
        return newState
      case DELETE_TAG:
        delete newState[action.payload]
        return newState
      default:
        return state
    }
}

export default tagsReducer;
