const SET_USER_DATA = 'SET-USER_DATA'
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING'

const initialState = {
  id: null,
  email: null,
  login: null,
  isFetching: false,
  isAuth : false
}

const authReducer = (state = initialState,action) =>{
  switch(action.type){
    case SET_USER_DATA:
      return {
        ...state,
        ...action.data,
        isAuth: true
      }
    case TOOGLE_IS_FETCHING:{
      return {...state, isFetching: action.isFetching}
    }
    default:
      return state
  }
}

export const setAuthUserData=(id, email,login)=>({type:SET_USER_DATA, data: {id, email,login}})
export const toogleIsFetching=(isFetching)=>({type:TOOGLE_IS_FETCHING, isFetching})



export default authReducer





  