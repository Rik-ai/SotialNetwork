import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfile } from '../../Redux/Reducer/ProfilePageReducer'
import * as axios from 'axios'
import { withRouter } from 'react-router-dom'




class ProfileContainer extends React.Component  {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
      userId = 11
    }
    axios.get('https://social-network.samuraijs.com/api/1.0/profile/' + userId)
      .then(response => {
        this.props.setUserProfile(response.data) 
      })
  }

  render () {
    
    return (
      <Profile {...this.props} profile={this.props.profile}/> 
    )
  }
}
const mapStateToProps = (state)=>({
  profile:state.profilePageReducer.profile

})


const WithUrlDataContainerComponent = withRouter(ProfileContainer)
  
export default connect(mapStateToProps, {setUserProfile}) (WithUrlDataContainerComponent) 