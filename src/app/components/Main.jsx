import React from 'react'
import { Route } from 'react-router-dom'
import styled from '@emotion/styled'

import TopBar from './TopBar/TopBar'
import LeftBar from './LeftBar/LeftBar'
import Profile from'./Profile/Profile'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'
import Friends from './Friends/Friends'
import DialogsContainer from './Dialogs/DialogsContainer'


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



const Main = (props) => { 
  return (
    <AppStyleWrapper>
      <TopBar/>
      <LeftBar />

      <Route path='/profile' render={()=> <Profile />}/>

      <Route path='/dialogs' render={()=> <DialogsContainer/>}/>

      <Route path='/news' render={()=> <News/>}/>
      <Route path='/Music' render={()=> <Music/>}/>
      <Route path='/settings' render={()=> <Settings/>}/>
      <Route path='/friends' render={()=> <Friends/>}/>


    </AppStyleWrapper >

  )
}

export default Main
