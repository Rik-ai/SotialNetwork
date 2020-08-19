import React from 'react'
import { connect } from 'react-redux'
import { follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toogleIsFetching } from '../../Redux/Reducer/UsersPageReducer'
import * as axios from 'axios'
import Users from './Users'
import Preloader from '../common/Preloader/Preloader'


class UsersAPIContainer extends React.Component {

  componentDidMount(){
    this.props.toogleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toogleIsFetching(false)
        this.props.setUsers(response.data.items)
        this.props.setTotalUsersCount(response.data.totalCount)
      })
  }

  onPageChanged = (pageNumber) => {
    this.props.setCurrentPage(pageNumber)
    this.props.toogleIsFetching(true)
    axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`)
      .then(response => {
        this.props.toogleIsFetching(false)
        this.props.setUsers(response.data.items)
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
// const mapDispatchToProps = (dispatch) => {
//   return{
//     follow: (userId) => {
//       dispatch(followActionCreator(userId))
//     },
//     unfollow: (userId) => {
//       dispatch(unfollowActionCreator(userId))
//     },
//     setUsers: (users) => {
//       dispatch(setUsersActionCreator(users))
//     },
//     setCurrentPage: (pageNumber)=>{
//       dispatch(setCurrentPageActionCreator(pageNumber))
//     },
//     setTotalUsersCount: (totalCount)=>{
//       dispatch(setUsersTotalCountActionCreator(totalCount))
//     },
//     toogleIsFetching:(isFetching)=>{
//       dispatch(toogleIsFetchingActionCreator(isFetching))
//     }
//   }
// }

const UsersContainer = connect(mapStateToProps,{follow,unfollow,setUsers,setCurrentPage,setTotalUsersCount,toogleIsFetching})(UsersAPIContainer)

export default UsersContainer