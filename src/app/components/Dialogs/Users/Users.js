import React from 'react'
import styled from '@emotion/styled'
import { NavLink } from 'react-router-dom'

const Img = styled.img`
width:50px;
height:50px;
`

const User = styled.div`
padding: 10px;
font-size: 1em;
display: grid;
grid-template-columns: 2fr 3fr;
border: 1px solid #474a4d;
border-radius: 15px;
border-right: none;
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