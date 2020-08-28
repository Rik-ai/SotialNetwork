import { createStore, combineReducers, applyMiddleware } from 'redux'
import profilePageReducer from './Reducer/ProfilePageReducer'
import dialogsPageReducer from './Reducer/DialogsPageReducer'
import leftBarReducer from './Reducer/LeftBarReducer'
import usersPageReducer from './Reducer/UsersPageReducer'
import authReducer from './Reducer/AuthReducer'
import thunkMiddleware from 'redux-thunk'


const reducers = combineReducers({
  profilePageReducer,
  dialogsPageReducer,
  leftBarReducer,
  usersPageReducer,
  authReducer
})


const store = createStore(reducers, applyMiddleware(thunkMiddleware))

window.store = store

export default store