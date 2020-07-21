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
  
  return(
    
    <Div>
      <div>
        <Users name={userData[0].name} id={userData[0].id}/>
        <Users name={userData[1].name} id={userData[1].id}/>
        <Users name={userData[2].name} id={userData[2].id}/>
        <Users name={userData[3].name} id={userData[3].id}/>
        <Users name={userData[4].name} id={userData[4].id}/>
        <Users name={userData[5].name} id={userData[5].id}/>

      </div>
      
      <div>
        <UserMessages message={messagesData[0].message}/>
        <UserMessages message={messagesData[1].message}/>
        <UserMessages message={messagesData[2].message}/>
        <UserMessages message={messagesData[3].message}/>
        <UserMessages message={messagesData[4].message}/>
        <UserMessages message={messagesData[5].message}/>
      </div>     
    </Div>
  )

}

export default Dialogs