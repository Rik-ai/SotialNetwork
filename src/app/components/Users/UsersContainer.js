import React from 'react'
import { connect } from 'react-redux'
import { follow,unfollow,setCurrentPage,
  getUsers } from '../../Redux/Reducer/UsersPageReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'


class UsersAPIContainer extends React.Component {

  componentDidMount(){
    this.props.getUsers(this.props.setCurrentPage, this.props.pageSize)
  }
  onPageChanged = (pageNumber) => {
    this.props.getUsers(pageNumber, this.props.pageSize)
  }
  render() { 
    return <>
    {this.props.isFetching ? <Preloader/> : null} 
     
    <Users
      totalUsersCount={this.props.totalUsersCount}
      pageSize={this.props.pageSize}
      currentPage={this.props.currentPage}
      onPageChanged={this.onPageChanged}
      users={this.props.users}
      unfollow={this.props.unfollow}
      follow={this.props.follow}
      followingInProgress={this.props.followingInProgress}
    />
    </>
  }
}
const mapStateToProps =  (state)=>{
  return{
    users:state.usersPageReducer.users,
    pageSize: state.usersPageReducer.pageSize,
    totalUsersCount: state.usersPageReducer.totalUsersCount,
    currentPage: state.usersPageReducer.currentPage,
    isFetching: state.usersPageReducer.isFetching,
    followingInProgress: state.usersPageReducer.followingInProgress
  }
}


const UsersContainer = connect(mapStateToProps,{follow, unfollow, setCurrentPage, getUsers}
)(UsersAPIContainer)

export default UsersContainer