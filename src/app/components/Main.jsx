import React, { Component } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import styled from '@emotion/styled'
import { toggleTheme } from 'state/actions'
import { getTheme } from 'state/selectors'
import Bar from './TopBar/Bar/Bar'
import LeftBar from './LeftBar/LeftBar'
import MainContent from'./Main/Main'




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

  // Toogle theme
  // const dispatch = useDispatch()
  // const theme = useSelector(getTheme)

  return (
    <AppStyleWrapper>
      <LeftBar />
      <Bar/>
      <MainContent/>
    </AppStyleWrapper >

  )
}

export default Main
