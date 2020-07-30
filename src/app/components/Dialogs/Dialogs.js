import React from 'react'
import styled from '@emotion/styled'
import Users from './Users/Users'
import UserMessages from './UserMessages/UserMessages'

const Div = styled.div`
background-color:#242526;
margin: 30px 0 0 300px;
height: 830px;
width: 1530px;
padding: 1rem;
border: 1px solid #474a4d;
border-radius: 15px;
color: #dadce1;
font-size: 2em;
display: grid;
grid-template-columns: 2fr 3fr;
`


const TextArea = styled.textarea`
font-family:inherit;
font-size:16px;
display:block;
width:600px;
min-height:30px;
max-height:100px;
padding: 10px 12px;
border 1px solid #474a4d;
resize:vertical;
`
const Button = styled.button`
padding-left:5px;
display: inline-block;
font-family:inherit;
font-size:16px;
`

const Dialogs =(props)=>{

  const newDialogsElement = React.createRef()
  
  const addMessage = ()=>{
    const text = newDialogsElement.current.value
    alert(text)
  }

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

      <div> 
        <TextArea ref={newDialogsElement}/>
        <Button onClick={addMessage}>Send message</Button>
      </div>
    </Div>
  )

}

export default Dialogs