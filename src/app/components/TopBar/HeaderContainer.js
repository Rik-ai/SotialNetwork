import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setAuthUserData } from '../../Redux/Reducer/AuthReducer'
import { authAPI } from '../api/api'


class HeaderContainer extends React.Component {
    
  componentDidMount(){
    authAPI.getAuth()
      .then(data => {
        if(data.resultCode === 0){
          const {id, login, email} = data.data
          this.props.setAuthUserData(id,email, login)
        }
      })
  }

  render () {
    return ( <Header {...this.props} />)

  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login
})

export default connect(mapStateToProps, {setAuthUserData}) (HeaderContainer)