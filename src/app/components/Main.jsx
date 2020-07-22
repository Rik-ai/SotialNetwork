import React from 'react'
import styled from '@emotion/styled'
import TopBar from './TopBar/TopBar'
import LeftBar from './LeftBar/LeftBar'
import Profile from'./Profile/Profile'
import Dialogs from './Dialogs/Dialogs'
import { Route } from 'react-router-dom'
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



const Main = (props) => { 

  return (
    <AppStyleWrapper>
      <TopBar/>
      <LeftBar />

      <Route path='/profile' render={()=><Profile postData={props.postData}/>}/>
      <Route path='/dialogs' render={()=>
        <Dialogs
          userData={props.userData}
          messagesData={props.messagesData}
        />}/>
      <Route path='/news' render={()=><News/>}/>
      <Route path='/Music' render={()=><Music/>}/>
      <Route path='/settings' render={()=><Settings/>}/>


    </AppStyleWrapper >

  )
}

export default Main
