import React from 'react'
import styled from '@emotion/styled'
import TopBar from './TopBar/TopBar'
import LeftBar from './LeftBar/LeftBar'
import Profile from'./Profile/Profile'




const AppStyleWrapper = styled.div`
height: 100vh;
overflow: hidden;
position: fixed;
width: 100%;
top: 0;
left: 0;
background-size:100%;
margin: 0;
background: #151616;
font-family: roboto;
-webkit-font-smoothing: antialiased;
-moz-osx-font-smoothing: grayscale;
color: ${props => props.color};
`



const Main = () => { 

  return (
    <AppStyleWrapper>
      <TopBar/>
      <LeftBar />
      <Profile/>
    </AppStyleWrapper >

  )
}

export default Main
