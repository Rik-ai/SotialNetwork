import React from 'react'
import styled from '@emotion/styled'

const SideBanner = styled.div`
background-color:#242526;
margin-top: 30px;
position: absolute;
height: 100%;
width: 250px;
padding: 1rem;
border-right: 1px solid #474a4d;
border-top: 1px solid #474a4d;
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


const LeftBar = () => {
  return (
    <SideBanner >
      <Nav>
        <Div><a href='/profile'>Profile</a></Div>
        <Div><a href='/dialogs'>Messages</a></Div>
        <Div><a href='/news'>News</a></Div>
        <Div><a href='/music'>Music</a></Div>
        <Div><a href='/settings'>Settings</a></Div>

      </Nav>
    </SideBanner>
  )
}


export default LeftBar