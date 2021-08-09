import axios from 'axios'
import {
  LIST_CREATE_FAIL,
  LIST_CREATE_REQUEST,
  LIST_CREATE_SUCCESS,
  LIST_GET_ALL_CHECKED,
  LIST_GET_ALL_FAIL,
  LIST_GET_ALL_REQUEST,
  LIST_GET_ALL_SUCCESS,
  LIST_GET_ALL_TYPES,
  LIST_UPDATE_FAIL,
  LIST_UPDATE_REQUEST,
  LIST_UPDATE_SUCCESS,
} from '../constants/listConstant'

export const listAllLists = () => async (dispatch) => {
  try {
    dispatch({ type: LIST_GET_ALL_REQUEST })
    const { data } = await axios.get('/api/lists')
    const listType = ['account', 'command', 'note']
    dispatch({ type: LIST_GET_ALL_SUCCESS, payload: data })
    dispatch({
      type: LIST_GET_ALL_CHECKED,
      payload: listType,
    })
    dispatch({
      type: LIST_GET_ALL_TYPES,
      payload: listType,
    })
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

export const createAList = (list) => async (dispatch) => {
  try {
    dispatch({ type: LIST_CREATE_REQUEST })
    const { data } = await axios.post('/api/lists', list)
    dispatch({ type: LIST_CREATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: LIST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const deleteAList = (id) => async (dispatch) => {
  try {
    dispatch({ type: LIST_CREATE_REQUEST })
    await axios.delete(`/api/lists/${id}`)
    dispatch({ type: LIST_CREATE_SUCCESS })
  } catch (error) {
    dispatch({
      type: LIST_CREATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}

export const updateAList = (list) => async (dispatch) => {
  try {
    dispatch({ type: LIST_UPDATE_REQUEST })
    const { data } = await axios.put(`/api/lists/${list._id}`, list)
    dispatch({ type: LIST_UPDATE_SUCCESS, payload: data })
  } catch (error) {
    dispatch({
      type: LIST_UPDATE_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    })
  }
}
