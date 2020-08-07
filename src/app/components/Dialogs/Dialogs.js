import React from 'react'
import styled from '@emotion/styled'
import Users from './Users/Users'
import UserMessages from './UserMessages/UserMessages'
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../Redux/Reducer/DialogsPageReducer'

const Div = styled.div`
background-color:#242526;
margin: 30px 0 0 300px;
height: 700px;
width: 1530px;
padding: 1rem;
border: 1px solid #474a4d;
border-radius: 15px;
color: #dadce1;
font-size: 2em;
display: grid;
grid-template-columns: 2fr 3fr;
overflow-y: auto;
`
const TextArea = styled.textarea`
font-family:inherit;
font-size:16px;
display:block;
width:600px;
min-width:1500px;
max-width:1500px;
padding: 10px 12px;
border 1px solid #474a4d;
resize:horizontal;
`
const Button = styled.button`
padding-left:5px;
display: inline-block;
font-family:inherit;
font-size:16px;
`
const Div2 = styled.div`
background-color:#242526;
margin: 10px 0 0 300px;
height: 85px;
width: 1530px;
padding: 1rem;
border: 1px solid #474a4d;
border-radius: 15px;
color: #dadce1;
font-size: 2em;
`



const Dialogs =(props)=>{
  console.log(props)
  
  const addMessage = ()=>{
    props.dispatch(addMessageActionCreator())
  }

  const onMessageChange =(event)=>{
    const text = event.target.value
    props.dispatch(updateNewMessageTextActionCreator(text))
  }

  const userElements = props.userData
    .map( (user)=> <Users name={user.name} id={user.id}/> )

  const messagesElements = props.messagesData
    .map((messages)=> <UserMessages message={messages.message}/>)

  return(
    <div>
      <Div>
 
        <div>
          {userElements}
        </div>
      
        <div>
          {messagesElements}
        </div>    

      
      </Div>
      <Div2> 
        <TextArea
          onChange={onMessageChange}
          placeholder='Enter your message...' 
          value={props.newMessageText}
        />
        <Button onClick={addMessage}>Send message</Button>
      </Div2>
    </div>
  )

}

export default Dialogs