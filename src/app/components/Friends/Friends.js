import React from 'react'
import styled from '@emotion/styled'

const Div = styled.div`
background-color:#242526;
margin: 30px 0 0 300px;
height: 830px;
width: 1530px;
padding: 1rem;
border 1px solid #474a4d;
border-radius: 15px;
color:#dadce1;
font-size: 2em;
`
const Div2= styled.div`
display: inline;
font-size: 20px;
`
const Img = styled.img`
width:40px;
height:40px;
padding-left: 10px;
display: inline;
border-radius: 50px;
`

const Users = (props)=>{
  return(
    <Div2>
      <Img src='https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcT6Ghz_3vVX362NspWGVByszfbkVlJ77tisTQ&usqp=CAU' />
      {props.name}
    </Div2>
    
  )
}
  
  
const Friends =(props)=>{

  // const friendsElement = props.friendsData.map((friend, id) => <Users name={friend.name} id={friend.id}/>)
  return(
    <Div>
      Friends
    </Div>
  )
  
}

export default Friends