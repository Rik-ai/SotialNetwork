import React from 'react'
import styled from '@emotion/styled'

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

const Messages = styled.div`
padding: 10px;

`
const User = styled.div`
padding: 10px;

`



const Dialogs =()=>{
  return(
    
    <Div>
      <div>
        <User>Ivan</User>
        <User>Anna</User>
        <User>Andry</User>
        <User>Shon</User>
      </div>
      
      <div>
        <Messages>Hello</Messages>
        <Messages>How are you ?</Messages>
        <Messages>Wtf man?</Messages>
        <Messages>You are the best !!</Messages>
      </div>     
    </Div>
  )

}

export default Dialogs