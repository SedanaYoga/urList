import {
  LIST_GET_ALL_CHECKED,
  LIST_GET_ALL_FAIL,
  LIST_GET_ALL_REQUEST,
  LIST_GET_ALL_SEARCH,
  LIST_GET_ALL_SUCCESS,
} from '../constants/listConstant'

export const listAllReducer = (
  state = {
    lists: [],
    checkedCheckbox: [],
    searchQueryList: '',
  },
  action
) => {
  switch (action.type) {
    case LIST_GET_ALL_REQUEST:
      return { ...state, loading: true, lists: [] }
    case LIST_GET_ALL_SUCCESS:
      return {
        ...state,
        loading: false,
        lists: action.payload,
      }
    case LIST_GET_ALL_CHECKED:
      return {
        ...state,
        checkedCheckbox: action.payload,
      }
    case LIST_GET_ALL_SEARCH:
      return {
        ...state,
        searchQueryList: action.payload,
      }
    case LIST_GET_ALL_FAIL:
      return { ...state, loading: false, error: action.payload }
    default:
      return state
  }
}