import React from 'react'
import styled from '@emotion/styled'
import Users from './Users/Users'
import UserMessages from './UserMessages/UserMessages'

const Div = styled.div`
background-color:#242526;
margin: 30px 0 0 300px;
height: 100%;
width: 100%;
padding: 1rem;
border: 1px solid #474a4d;
border-radius: 15px;
color: #dadce1;
font-size: 2em;
display: grid;
grid-template-columns: 2fr 10fr;
`

const Dialogs =(props)=>{
  
  const userData = [
    {id: 1, name: 'Ivan'},
    {id: 2, name: 'Maria'},
    {id: 3, name: 'Andry'},
    {id: 4, name: 'Jin'},
    {id: 5, name: 'Viktor'},
    {id: 6, name: 'Anna'}
  ]
  
  const messagesData = [
    {id: 1, message: 'Hello'},
    {id: 2, message: 'How are you ?'},
    {id: 3, message: 'Wtf man?'},
    {id: 4, message: 'You are the best !!'},
    {id: 5, message: 'Why nobody love me ?'},
    {id: 6, message: 'Yo'}
  ]

  const userElements = userData
    .map( (user)=> <Users name={user.name} id={user.id}/> )

  const messagesElements = messagesData
    .map((messages)=> <UserMessages message={messages.message}/>)

  return(
    
    <Div>
      <div>
        {userElements}

      </div>
      
      <div>
        {messagesElements}
      </div>     
    </Div>
  )

}

export default Dialogs