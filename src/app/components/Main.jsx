import React from 'react'
import styled from '@emotion/styled'
import TopBar from './TopBar/TopBar'
import LeftBar from './LeftBar/LeftBar'
import Profile from'./Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import { Route, BrowserRouter } from 'react-router-dom'
import News from './News/News'
import Music from './Music/Music'
import Settings from './Settings/Settings'





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
      <BrowserRouter>
        <Route path='/profile' component={Profile}/>
        <Route path='/dialogs' component={Dialogs}/>
        <Route path='/news' component={News}/>
        <Route path='/Music' component={Music}/>
        <Route path='/settings' component={Settings}/>

      </BrowserRouter>
    </AppStyleWrapper >

  )
}

export default Main
