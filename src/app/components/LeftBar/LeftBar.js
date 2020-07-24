import React from 'react'
import styled from '@emotion/styled'
import {NavLink} from 'react-router-dom'


const SideBanner = styled.div`
background-color:#242526;
margin: 30px 0 0 6px;
position: absolute;
height: 830px;
width: 250px;
padding: 1rem;
border: 1px solid #474a4d;
border-radius: 15px;
color:#dadce1;
font-size: 2em;
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
        <Div><NavLink to='/profile'>Profile</NavLink></Div>
        <Div><NavLink to='/dialogs'>Dialogs</NavLink></Div>
        <Div><NavLink to='/news'>News</NavLink></Div>
        <Div><NavLink to='/music'>Music</NavLink></Div>
        <Div><NavLink to='/settings'>Settings</NavLink></Div>
        <Div><NavLink to='/friends'>Friends:</NavLink></Div>

      </Nav>
    </SideBanner>
  )
}


export default LeftBar