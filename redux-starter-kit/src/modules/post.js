import { handleActions } from 'redux-actions'
import axios from 'axios'

const getPostAPI = postId => axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)

const GET_POST = {
  PENDING: "GET_POST_PENDING",
  SUCCESS: "GET_POST_SUCCESS",
  FAILURE: "GET_POST_FAILURE",
}

export const getPost = postId => dispatch => {
  dispatch({ type: GET_POST.PENDING })
  // this is to notify the request has been executed.

  // below are promise async. program
  return (
    getPostAPI(postId)
      .then(
        response => dispatch({
          type: GET_POST.SUCCESS,
          payload: response
        })
      )
      .catch(
        error => dispatch({
          type: GET_POST.FAILURE,
          payload: error
        })
      )
  )
}

const initialState = {
  pending: false,
  error: false,
  data: {
    title: '',
    body: ''
  }
}

export default handleActions({
  [GET_POST.PENDING]: (state, action) => {
    return {
      ...state,
      pending: true,
      error: false
    }
  },
  [GET_POST.SUCCESS]: (state, action) => {
    const { title, body } = action.payload.data;

    return {
      ...state,
      pending: false,
      data: {
        title,
        body
      }
    }
  },
  [GET_POST.FAILURE]: (state, action) => {
    return {
      ...state,
      pending: false,
      error: true
    }
  },
}, initialState)