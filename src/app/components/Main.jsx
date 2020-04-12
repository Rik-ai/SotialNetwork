import React from 'react'
import { useSelector, useDispatch } from 'react-redux'

import styled from '@emotion/styled'
import { css } from '@emotion/core'

import { toggleTheme } from 'state/actions'
import { getTheme } from 'state/selectors'

const AppStyleWrapper = styled.div`
  height: 100vh;
  width: 100vw;
  overflow: hidden;
  display: flex;
  ${props => css`color: ${props.color}`};
`

const Main = () => {

  const dispatch = useDispatch()
  const theme = useSelector(getTheme)

  return (
    <AppStyleWrapper color = {theme.text.c0}>
      <div
        onClick = { () => dispatch(toggleTheme('white'))
        }> WORKS! 
      </div>
    </AppStyleWrapper>
  )
}

export default Main
