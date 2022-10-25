// Actions
const GET_ALL_COMMENTS = 'comments/GET_ALL_COMMENTS'
const GET_IMAGE_COMMENTS = 'comments/GET_IMAGE_COMMENTS'
const CREATE_COMMENT = 'comments/CREATE_COMMENT'
const UPDATE_COMMENT = 'comments/UPDATE_COMMENT'
const DELETE_COMMENT = 'comments/DELETE_COMMENT'

// Action Creators
export const getAllCommentsAC = (comments) => ({
  type: GET_ALL_COMMENTS,
  payload: comments,
})

export const getImageCommentsAC = (imageId) => ({
  type: GET_IMAGE_COMMENTS,
  payload: imageId,
})

export const createCommentAC = (comment) => ({
  type: CREATE_COMMENT,
  payload: comment,
})

export const updateCommentAC = (comment) => ({
  type: UPDATE_COMMENT,
  payload: comment,
})

export const deleteCommentAC = (commentId) => ({
  type: DELETE_COMMENT,
  payload: commentId,
})

// Thunks
export const getAllCommentsThunk = () => async (dispatch) => {
  const res = await fetch('/api/comments/');
  if (res.ok) {
    const comments = await res.json()
    // console.log('this is comments', comments.comments)
    dispatch(getAllCommentsAC(comments.comments))
    return comments
  }
}

export const getImageCommentsThunk = (imageId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${imageId}`);
  if (res.ok) {
    const comments = await res.json()
    // console.log('this is comments from one image thunk', comments.comments)
    dispatch(getImageCommentsAC(comments.comments))
    return comments
  }
}

export const createCommentThunk = (comment) => async (dispatch) => {
  const res = await fetch(`/api/comments/create_comment`, {
    method: 'POST',
    headers: {'Content-Type': 'application/json'},
    body: JSON.stringify(comment)
  })
  if (res.ok) {
    const comment = await res.json()
    // console.log("THIS IS COMMENT", comment)
    dispatch(createCommentAC(comment))
    return res
  }
}

export const updateCommentThunk = (comment, commentId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`, {
      method: 'PUT',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(comment)
  })
  if (res.ok) {
      const comment = await res.json()
      dispatch(updateCommentAC(comment))
      return res
  }
}

export const deleteCommentThunk = (commentId) => async (dispatch) => {
  const res = await fetch(`/api/comments/${commentId}`, {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
  })
  if (res.ok) {
      dispatch(deleteCommentAC(commentId))
      return res
  }
}

// Reducer

const initialState = {}
const commentReducer = (state = initialState, action) => {
    let newState = {...state}
    switch (action.type) {
      case GET_ALL_COMMENTS:
        action.payload.forEach((comment) => {
            newState[comment.id] = comment
        })
        // console.log('this is action', action)
        // console.log('this is new state', newState)
        return newState
      case GET_IMAGE_COMMENTS:
        action.payload.forEach((comment) => {
            newState[comment.id] = comment
        })
        // console.log('this is action image comments', action)
        // console.log('this is new state image comments', newState)
        return newState
      case CREATE_COMMENT:
        newState[action.payload.id] = action.payload
        return newState
      case UPDATE_COMMENT:
        newState[action.payload.id] = action.payload
        return newState
      case DELETE_COMMENT:
        delete newState[action.payload]
        return newState
      default:
        return state
    }
}


export default commentReducer;
