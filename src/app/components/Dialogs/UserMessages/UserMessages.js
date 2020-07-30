import React from 'react'
import styled from '@emotion/styled'

const Message = styled.div`
padding: 16.6px;
font-size: 1em;
display: grid;
grid-template-columns: 2fr 3fr;
border: 1px solid #474a4d;
border-radius: 15px;
border-left: none;
`

const UserMessages = (props)=>{
  return(
    <Message>{props.message}</Message>
  )
}

export default UserMessages