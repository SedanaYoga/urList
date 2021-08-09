import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import {
  listAllReducer,
  listCreateReducer,
  listDeleteReducer,
  listUpdateReducer,
} from './reducers/listReducers'

const reducer = combineReducers({
  listAll: listAllReducer,
  listCreate: listCreateReducer,
  listDelete: listDeleteReducer,
  listUpdate: listUpdateReducer,
})

const initialState = {}

const middleware = [thunk]

const store = createStore(
  reducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
)

export default store
