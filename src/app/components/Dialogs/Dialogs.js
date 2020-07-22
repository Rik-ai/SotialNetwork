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
  


  const userElements = props.userData
    .map( (user)=> <Users name={user.name} id={user.id}/> )

  const messagesElements = props.messagesData
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