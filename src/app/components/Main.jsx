import React from 'react'
import styled from '@emotion/styled'
import TopBar from './TopBar/TopBar'
import LeftBar from './LeftBar/LeftBar'
import Profile from'./Profile/Profile'




const AppStyleWrapper = styled.div`
height: 100%;
overflow: hidden;
position: fixed;
width: 100%;
top: 0;
left: 0;
margin: 0;
background: #151616;

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
