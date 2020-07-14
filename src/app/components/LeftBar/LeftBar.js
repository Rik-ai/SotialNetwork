import React from 'react'
import styled from '@emotion/styled'

const SideBanner = styled.div`
background-color:#242526;
margin-top: 90px;
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
margin:20px;
`
const Div = styled.div`
padding-top:20px;
`


const LeftBar = () => {
  return (
    <SideBanner >
      <Nav>
        <Div>Profile</Div>
        <Div>Messages</Div>
        <Div>Main content</Div>
      </Nav>
    </SideBanner>
  )
}


export default LeftBar