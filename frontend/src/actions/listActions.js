import axios from 'axios'
import {
  LIST_GET_ALL_FAIL,
  LIST_GET_ALL_REQUEST,
  LIST_GET_ALL_SUCCESS,
} from '../constants/listConstant'

export const listAllLists = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_GET_ALL_REQUEST })
    const { data } = await axios.get('/api/lists')
    dispatch({ type: LIST_GET_ALL_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: LIST_GET_ALL_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
