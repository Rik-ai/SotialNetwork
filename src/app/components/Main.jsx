import React from 'react'
import { Route } from 'react-router-dom'
import styled from '@emotion/styled'

import LeftBar from './LeftBar/LeftBar'
import ProfileContainer from'./Profile/ProfileContainer'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'
import Friends from './Friends/Friends'
import DialogsContainer from './Dialogs/DialogsContainer'
import UsersContainer from './Users/UsersContainer'
import HeaderContainer from './TopBar/HeaderContainer'


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
      <HeaderContainer/>
      <LeftBar />
      <Route path='/dialogs' render={()=> <DialogsContainer/>}/>
      <Route path='/profile/:userId?' render={()=> <ProfileContainer />}/>
      <Route path='/users' render={()=> <UsersContainer/>}/>
      <Route path='/news' render={()=> <News/>}/>
      <Route path='/music' render={()=> <Music/>}/>
      <Route path='/settings' render={()=> <Settings/>}/>
      <Route path='/friends' render={()=> <Friends/>}/>

    </AppStyleWrapper >

  )
}

export default Main
