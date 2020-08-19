import React from 'react'
import { Route } from 'react-router-dom'
import styled from '@emotion/styled'

import TopBar from './TopBar/TopBar'
import LeftBar from './LeftBar/LeftBar'
import ProfileContainer from'./Profile/ProfileContainer'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'
import Friends from './Friends/Friends'
import DialogsContainer from './Dialogs/DialogsContainer'
import UsersContainer from './Users/UsersContainer'


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
const Div = styled.div`
background-color:#242526;
margin: 30px 0 0 300px;
height: 860px;
width: 1530px;
padding: 1rem;
border: 1px solid #474a4d;
border-radius: 15px;
color: #dadce1;
font-size: 25px;
overflow-y: none;
`



const Main = (props) => { 
  return (
    <AppStyleWrapper>
      <TopBar/>
      <LeftBar />
      <Route path='/dialogs' render={()=> <DialogsContainer/>}/>
      <Div>
        <Route path='/profile' render={()=> <ProfileContainer />}/>
        <Route path='/users' render={()=> <UsersContainer/>}/>
        <Route path='/news' render={()=> <News/>}/>
        <Route path='/music' render={()=> <Music/>}/>
        <Route path='/settings' render={()=> <Settings/>}/>
        <Route path='/friends' render={()=> <Friends/>}/>
      </Div>

    </AppStyleWrapper >

  )
}

export default Main
