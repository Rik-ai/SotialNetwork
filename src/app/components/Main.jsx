import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import Sidebar from './Sidebar'

import styled from '@emotion/styled'

import { toggleTheme } from 'state/actions'
import { getTheme } from 'state/selectors'

const AppStyleWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  color: ${props=>props.color};
`

const Main = () => {

  // Toogle theme
  // const dispatch = useDispatch()
  // const theme = useSelector(getTheme)

  return (
    <AppStyleWrapper >
      <Sidebar/>
    </AppStyleWrapper>
  )
}

export default Main
