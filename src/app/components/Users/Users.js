import React from 'react'
import styled from '@emotion/styled'
import * as axios from 'axios'
import userPhoto from '../../assets/images/images.png'

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
border-radius: 20px;
`
const Button = styled.button`
padding-left:5px;
margin-bottom: 10px;
display: inline-block;
font-family:inherit;
font-size:20px;
`

class Users extends React.Component {

  constructor(props){
    super(props)
    
    axios.get('https://social-network.samuraijs.com/api/1.0/users')
      .then(response => {
        this.props.setUsers(response.data.items)
      })
  }


  render() {
    return(
      <Div>
        {
          this.props.users.map( user => 
            <div key ={user.id}>
              <Img src={user.photos.small != null ? user.photos.small : userPhoto} />
              <div>
                <div>{user.name}</div>
                <div>Status: {user.status}</div>
                <div>Country: {'user.location.country'}</div>
                <div>City: {'user.location.city'}</div>
                {user.followed 
                  ? <Button onClick={()=>{this.props.unfollow(user.id)}}>Unfollow</Button>
                  : <Button onClick={()=>{this.props.follow(user.id)}}>Follow</Button>}
              </div>
  
               
            </div>
          )
        }
      </Div>
    )
  }
}


export default Users