import {
  LIST_CREATE_FAIL,
  LIST_CREATE_REQUEST,
  LIST_CREATE_SUCCESS,
  LIST_DELETE_FAIL,
  LIST_DELETE_REQUEST,
  LIST_DELETE_SUCCESS,
  LIST_GET_ALL_CHECKED,
  LIST_GET_ALL_FAIL,
  LIST_GET_ALL_REQUEST,
  LIST_GET_ALL_SEARCH,
  LIST_GET_ALL_SUCCESS,
  LIST_GET_ALL_TYPES,
} from '../constants/listConstant'

export const listAllReducer = (
  state = {
    lists: [],
    listTypes: [],
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
    case LIST_GET_ALL_TYPES:
      return {
        ...state,
        listTypes: action.payload,
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

export const listCreateReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_CREATE_REQUEST:
      return { loading: true }
    case LIST_CREATE_SUCCESS:
      return { loading: false, success: true, list: action.payload }
    case LIST_CREATE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}

export const listDeleteReducer = (state = {}, action) => {
  switch (action.type) {
    case LIST_DELETE_REQUEST:
      return { loading: true }
    case LIST_DELETE_SUCCESS:
      return { loading: false, success: true }
    case LIST_DELETE_FAIL:
      return { loading: false, error: action.payload }
    default:
      return state
  }
}
