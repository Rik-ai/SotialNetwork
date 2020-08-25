import React from 'react'
import TopBar from './TopBar'
import Axios from 'axios'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../Redux/Reducer/AuthReducer'


class HeaderContainer extends React.Component {
    
  componentDidMount(){
    Axios.get('https://social-network.samuraijs.com/api/1.0/auth/me', {
      withCredentials: true
    })
      .then(response => {
        if(response.data.resultCode === 0){
          const {id, login, email} = response.data.data
          this.props.setAuthUserData(id,email, login)
        }
      })
  }

  render () {
    return ( <TopBar {...this.props} />)

  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)