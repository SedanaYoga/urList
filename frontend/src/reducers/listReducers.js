import {
  LIST_GET_ALL_FAIL,
  LIST_GET_ALL_REQUEST,
  LIST_GET_ALL_SUCCESS,
} from '../constants/listConstant'

export const listAllReducer = (state = { lists: [] }, action) => {
  switch (action.type) {
    case LIST_GET_ALL_REQUEST:
      return { loading: true, lists: [] }
    case LIST_GET_ALL_SUCCESS:
      return {
        loading: false,
        lists: action.payload,
      }
    case LIST_GET_ALL_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
