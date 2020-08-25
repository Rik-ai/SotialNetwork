import React from 'react'
import styled from '@emotion/styled'
import {NavLink} from 'react-router-dom'


const SideBanner = styled.div`
background-color:#242526;
margin: 30px 0 0 6px;
position: absolute;
height: 100%;
width: 250px;
padding: 1rem;
border: 1px solid #474a4d;
border-radius: 15px;
font-size: 30px;
`
const Nav = styled.nav`
margin: 0 30px;
`
const Div = styled.div`
padding-top:20px;
`
 

const LeftBar = (props) => {

  return (
    <SideBanner >
      <Nav>
        <Div><NavLink to='/profile' style={{ color: '#dadce1', textDecoration: 'none' }}>Profile</NavLink></Div>
        <Div><NavLink to='/dialogs'style={{ color: '#dadce1', textDecoration: 'none' }}>Dialogs</NavLink></Div>
        <Div><NavLink to='/news'style={{ color: '#dadce1', textDecoration: 'none' }}>News</NavLink></Div>
        <Div><NavLink to='/music'style={{ color: '#dadce1', textDecoration: 'none' }}>Music</NavLink></Div>
        <Div><NavLink to='/settings'style={{ color: '#dadce1', textDecoration: 'none' }}>Settings</NavLink></Div>
        <Div><NavLink to='/friends'style={{ color: '#dadce1', textDecoration: 'none' }}>Friends:</NavLink></Div>
        <Div><NavLink to='/users'style={{ color: '#dadce1', textDecoration: 'none' }}>Find users:</NavLink></Div>

      </Nav>
    </SideBanner>
  )
}


export default LeftBar