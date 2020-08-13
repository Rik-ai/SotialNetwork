import React from 'react'
import { connect } from 'react-redux'
import { followActionCreator, unfollowActionCreator, setUsersActionCreator } from '../../Redux/Reducer/UsersPageReducer'
import Users from './Users'


const mapStateToProps =  (state)=>{
  return{
    users:state.usersPageReducer.users
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
    }
  }
}





const UsersContainer = connect(mapStateToProps, mapDispatchToProps)(Users)

export default UsersContainer