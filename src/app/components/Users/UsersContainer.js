import React from 'react'
import { connect } from 'react-redux'
import { follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toogleIsFetching } from '../../Redux/Reducer/UsersPageReducer'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import { usersAPI } from '../api/api'


class UsersAPIContainer extends React.Component {

  componentDidMount(){
    this.props.toogleIsFetching(true)

    usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
      .then(data => {
        this.props.toogleIsFetching(false)
        this.props.setUsers(data.items)
        this.props.setTotalUsersCount(data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toogleIsFetching(true)

    usersAPI.getUsers(pageNumber, this.props.pageSize)
      .then(data => {
        this.props.toogleIsFetching(false)
        this.props.setUsers(data.items)
      })
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
    isFetching: state.usersPageReducer.isFetching
  }
}


const UsersContainer = connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toogleIsFetching})(UsersAPIContainer)

export default UsersContainer