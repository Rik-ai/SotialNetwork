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
color:white;
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
        <Div><a>Profile</a></Div>
        <Div><a>Messages</a></Div>
        <Div><a>News</a></Div>
        <Div><a>Music</a></Div>
        <Div><a>Settings</a></Div>

      </Nav>
    </SideBanner>
  )
}


export default LeftBar