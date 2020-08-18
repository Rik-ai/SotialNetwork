const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING'

const initialState = {
  users:[],
  pageSize: 5,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true
}

const usersPageReducer = (state = initialState,action) =>{
  switch(action.type){
    case FOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId){
            return ({...user, followed: true})
          }
          return user
        })
      }
    case UNFOLLOW:
      return {
        ...state,
        users: state.users.map(user => {
          if (user.id === action.userId){
            return ({...user, followed: false})
          }
          return user
        })
      }
    case SET_USERS: {
      return {...state, users: action.users}
    }
    case SET_CURRENT_PAGE: {
      return {...state, currentPage: action.currentPage}
    }
    case SET_TOTAL_USERS_COUNT: {
      return {...state, totalUsersCount: action.count}
    }
    case TOOGLE_IS_FETCHING:{
      return {...state, isFetching: action.isFetching}
    }
    default:
      return state
  }
}

export const followActionCreator=(userId)=>({type:FOLLOW, userId})
export const unfollowActionCreator=(userId)=>({type:UNFOLLOW, userId})
export const setUsersActionCreator=(users)=>({type:SET_USERS, users})
export const setCurrentPageActionCreator=(currentPage)=>({type:SET_CURRENT_PAGE, currentPage})
export const setUsersTotalCountActionCreator=(totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const toogleIsFetchingActionCreator=(isFetching)=>({type:TOOGLE_IS_FETCHING, count:isFetching})



export default usersPageReducer





  