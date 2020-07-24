import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Img = styled.img`
width:50px;
height:50px;
`

const User = styled.div`
padding: 10px;
`
const Users = (props)=>{
  return(
    <User>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT3Ji4951CcdsY4ajHzKUjo0iuKkaXDGur7gQ&usqp=CAU' />
      <NavLink to={'/dialogs/'+ props.id}>{props.name}</NavLink>
    </User>
  )
}

export default Users