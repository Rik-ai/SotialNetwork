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
  return(
    
    <Div>
      <div>
        <Users name="Ivan" id="1"/>
        <Users name="Anna" id="2"/>
        <Users name="Andry" id="3"/>
        <Users name="Shon" id="4"/>

      </div>
      
      <div>
        <UserMessages message="Hello"/>
        <UserMessages message="How are you ?"/>
        <UserMessages message="Wtf man?"/>
        <UserMessages message="You are the best !!"/>
      </div>     
    </Div>
  )

}

export default Dialogs