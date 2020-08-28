import React from 'react'
import Header from './Header'
import { connect } from 'react-redux'
import { setAuthUserData, getAuth } from '../../Redux/Reducer/AuthReducer'


class HeaderContainer extends React.Component {
    
  componentDidMount(){
    this.props.getAuth()
  }

  render () {
    return ( <Header {...this.props} />)

  }
}

const mapStateToProps = (state) => ({
  isAuth: state.authReducer.isAuth,
  login: state.authReducer.login
})

export default connect(mapStateToProps, {setAuthUserData, getAuth}) (HeaderContainer)