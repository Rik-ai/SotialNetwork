import React from 'react'
import Profile from './Profile'
import { connect } from 'react-redux'
import { setUserProfile, getProfile } from '../../Redux/Reducer/ProfilePageReducer'
import { withRouter } from 'react-router-dom'




class ProfileContainer extends React.Component  {

  componentDidMount() {
    let userId = this.props.match.params.userId
    if(!userId){
      userId = 11
    }
    this.props.getProfile(+ userId)
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
  
export default connect(mapStateToProps, {setUserProfile, getProfile}) (WithUrlDataContainerComponent) 