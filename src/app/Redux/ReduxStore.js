import { createStore, combineReducers } from 'redux'
import profilePageReducer from './Reducer/ProfilePageReducer'
import dialogsPageReducer from './Reducer/DialogsPageReducer'
import leftBarReducer from './Reducer/LeftBarReducer'


const reducers = combineReducers({
  profilePageReducer,
  dialogsPageReducer,
  leftBarReducer
})


const store = createStore(reducers)

export default store