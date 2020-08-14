import React from 'react'
import { connect } from 'react-redux'
import { 
  followActionCreator,
  unfollowActionCreator,
  setUsersActionCreator, 
  setCurrentPageActionCreator,
  setUsersTotalCountActionCreator 
} from '../../Redux/Reducer/UsersPageReducer'
import Users from './Users'


const mapStateToProps =  (state)=>{
  return{
    users:state.usersPageReducer.users,
    pageSize: state.usersPageReducer.pageSize,
    totalUsersCount: state.usersPageReducer.totalUsersCount,
    currentPage: state.usersPageReducer.currentPage 
  }
}

const mapDispatchToProps = (dispatch) => {
  return{
    follow: (userId) => {
      dispatch(followActionCreator(userId))
    },
    unfollow: (userId) => {
      dispatch(unfollowActionCreator(userId))
    },
    setUsers: (users) => {
      dispatch(setUsersActionCreator(users))
    },
    setCurrentPage: (pageNumber)=>{
      dispatch(setCurrentPageActionCreator(pageNumber))
    },
    setTotalUsersCount: (totalCount)=>{
      dispatch(setUsersTotalCountActionCreator(totalCount))
    }
  }
}





const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer