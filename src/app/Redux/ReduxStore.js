import { createStore, combineReducers } from 'redux'
import profilePageReducer from './Reducer/ProfilePageReducer'
import dialogsPageReducer from './Reducer/DialogsPageReducer'
import leftBarReducer from './Reducer/LeftBarReducer'
import usersPageReducer from './Reducer/UsersPageReducer'



const reducers = combineReducers({
  profilePageReducer,
  dialogsPageReducer,
  leftBarReducer,
  usersPageReducer
})


const store = createStore(reducers)

export default store