import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfile, setUserContacts } from '../../Redux/Reducer/ProfilePageReducer'
import * as axios from 'axios'




class ProfileContainer extends React.Component  {

  componentDidMount() {
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/2')
      .then(response => {
        this.props.setUserProfile(response.data) 
        this.props.setUserContacts(response.data)
      })
  }

  render () {
    
    return (
      <Profile {...this.props} profile={this.props.profile} myContacts={this.props.myContacts} />
    )
  }
}
const mapStateToProps = (state)=>({
  profile:state.profilePageReducer.profile
})
  
export default connect(mapStateToProps, {setUserProfile, setUserContacts}) (ProfileContainer)