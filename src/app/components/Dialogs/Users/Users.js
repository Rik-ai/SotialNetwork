import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'


const User = styled.div`
padding: 10px;
`
const Users = (props)=>{
  return(
    <User>
      <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
    </User>
  )
}

export default Users