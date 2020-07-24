import React from 'react'
import styled from '@emotion/styled'

const Message = styled.div`
padding: 22px;
`

const UserMessages = (props)=>{
  return(
    <Message>{props.message}</Message>
  )
}

export default UserMessages