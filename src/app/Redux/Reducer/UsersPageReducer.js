import { usersAPI } from '../../components/api/api'

const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'SET-USERS'
const SET_CURRENT_PAGE = 'SET-CURRENT-PAGE'
const SET_TOTAL_USERS_COUNT = 'SET-TOTAL-USERS-COUNT'
const TOOGLE_IS_FETCHING = 'TOOGLE-IS-FETCHING'
const TOOGLE_IS_FOLLOWING_PROGRESS = 'TOOGLE-IS-FOLLOWING-PROGRESS'


const initialState = {
  users:[],
  pageSize: 6,
  totalUsersCount: 0,
  currentPage: 1,
  isFetching: true,
  followingInProgress: []
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
    case TOOGLE_IS_FOLLOWING_PROGRESS: {
      return {
        ...state,
        followingInProgress: action.followingInProgress 
          ? [...state.followingInProgress, action.userId ] 
          : state.followingInProgress.filter(id => id != action.userId )
      }
    }
    default:
      return state
  }
}

export const followSuccess=(userId)=>({type:FOLLOW, userId})
export const unfollowSuccess=(userId)=>({type:UNFOLLOW, userId})
export const setUsers=(users)=>({type:SET_USERS, users})
export const setCurrentPage=(currentPage)=>({type:SET_CURRENT_PAGE, currentPage})
export const setTotalUsersCount=(totalUsersCount)=>({type:SET_TOTAL_USERS_COUNT, count:totalUsersCount})
export const toogleIsFetching=(isFetching)=>({type:TOOGLE_IS_FETCHING, isFetching})
export const tooglefollowingInProgress=(followingInProgress, userId)=>({type:TOOGLE_IS_FOLLOWING_PROGRESS, followingInProgress, userId})

//Thunks:
export const getUsers = (currentPage, pageSize) => {
  return (dispatch)=>{
    dispatch(toogleIsFetching(true))
    usersAPI.getUsers(currentPage, pageSize)
      .then(data => {
        dispatch(toogleIsFetching(false))
        dispatch(setUsers(data.items))
        dispatch(setTotalUsersCount(data.totalCount))
      })
  }
}

export const follow = (userId) => {
  return (dispatch)=>{
    dispatch(tooglefollowingInProgress(true, userId))
    usersAPI.Follow(userId)
      .then(data => {
        if (data.resultCode == 0){
          dispatch(followSuccess(userId))
        } 
        dispatch(tooglefollowingInProgress(false, userId))
      })
  }
}

export const unfollow = (userId) => {
  return (dispatch)=>{
    dispatch(tooglefollowingInProgress(true, userId))
    usersAPI.Unfollow(userId)
      .then(data => {
        if (data.resultCode == 0){
          dispatch(unfollowSuccess(userId))
        } 
        dispatch(tooglefollowingInProgress(false, userId))
      })
  }
}

export default usersPageReducer





  