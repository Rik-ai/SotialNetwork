import React from 'react'
import styled from '@emotion/styled'

const Div = styled.div`
background-color:#242526;
margin: 30px 0 0 300px;
height: 830px;
width: 1530px;
padding: 1rem;
border: 1px solid #474a4d;
border-radius: 15px;
color: #dadce1;
font-size: 25px;
display: grid;
grid-template-columns: 2fr 2fr;
overflow-y: auto;
`
const Img = styled.img`
width:100px;
height:100px;
`
const Button = styled.button`
padding-left:5px;
display: inline-block;
font-family:inherit;
font-size:20px;
`

const Users =(props)=>{

  if (props.users.length ===0){
    props.setUsers([
      {id: 1, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVqhTJArI2RLSSzlY0X1twqrkjMrScCsRWwQ&usqp=CAU',
        followed: false, fullName: 'Ivan', status: 'I am a developer', location: {city: 'Yuznoukrainsk', country: 'Ukraine'}},
      {id: 2, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVqhTJArI2RLSSzlY0X1twqrkjMrScCsRWwQ&usqp=CAU',
        followed: true, fullName: 'Andrew', status: 'Looking for a job', location: {city: 'Kiev', country: 'Ukraine'}},
      {id: 3, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVqhTJArI2RLSSzlY0X1twqrkjMrScCsRWwQ&usqp=CAU',
        followed: false, fullName: 'Nikita', status: 'I am crazy', location: {city: 'Moskow', country: 'Russia'}},
      {id: 4, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVqhTJArI2RLSSzlY0X1twqrkjMrScCsRWwQ&usqp=CAU',
        followed: true, fullName: 'Sasha', status: 'Love cats !', location: {city: 'Minsk', country: 'Belarus'}},
      {id: 5, photoUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSVqhTJArI2RLSSzlY0X1twqrkjMrScCsRWwQ&usqp=CAU',
        followed: false, fullName: 'Julia', status: 'Learning JS', location: {city: 'New-York', country: 'USA'}}
    ])
  }

  return(
    <Div>
      {
        props.users.map( user => 
          <div key ={user.id}>
            <Img src={user.photoUrl} />
            <div>
              <div>{user.fullName}</div>
              <div>Status: {user.status}</div>
              <div>Country: {user.location.country}</div>
              <div>City: {user.location.city}</div>
              {user.followed 
                ? <Button onClick={()=>{props.unfollow(user.id)}}>Unfollow</Button>
                : <Button onClick={()=>{props.follow(user.id)}}>Follow</Button>}
            </div>

             
          </div>
        )
      }
    </Div>
  )

}

export default Users