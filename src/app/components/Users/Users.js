import React from 'react'
import styled from '@emotion/styled'
import userPhoto from '../../assets/images/images.png'
import styles from './styles.module.css'
import { NavLink } from 'react-router-dom'

const Div = styled.div`
background-color:#242526;
margin: 30px 0 0 300px;
height: 100%;
width: 100%;
padding: 10px;
border: 1px solid #474a4d;
border-radius: 15px;
color: #dadce1;
font-size: 25px;
`
const UserBaner = styled.div`
background-color:#242526;
margin: 10px;
height: 75%;
width: 80%;
padding: 1rem;
border 1px solid #474a4d;
border-radius: 15px;
color:#dadce1;
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
const Div2 = styled.div`
margin: 10px;
background-color:#242526;
height: 30px;
width: 80%;
padding: 15px;
border: 1px solid #474a4d;
border-radius: 15px;
color: #dadce1;
font-size: 25px;
overflow-y: auto;
overflow-x: none;
`


const Users = (props)=> {
  const pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
  const pages = []
  for(let i=1; i <= pagesCount; i++){ 
    pages.push(i)
  }
  return(
    <Div>
      <Div2>
        {pages.map(page=>{
          return <span className = {props.currentPage === page && styles.selectedPage} //не работает выделение страницы, потом доработать
            onClick ={(e)=>{props.onPageChanged(page)}} >{page}
          </span> 
        })}
      </Div2>
      <UserBaner>
      
        {
          props.users.map( user => 
            <div key ={user.id}>
              <NavLink to={'/profile/' + user.id}>
                <Img src={user.photos.small != null ? user.photos.small : userPhoto} />
              </NavLink>
              <div>
                <div>{user.name}</div>
                <div>Status: {user.status != null ? user.status : 'Hello my name is ' + user.name }</div>
                <div>Country: {'user.location.country'}</div>
                <div>City: {'user.location.city'}</div>
                {user.followed 
                  ? <Button disabled={props.followingInProgress.some(id=>id === user.id)}
                    onClick={()=>{props.unfollow(user.id)}}>
                     Unfollow</Button>

                  : <Button disabled={props.followingInProgress.some(id=>id === user.id)}
                    onClick={()=>{props.follow(user.id)}}>
                     Follow</Button>
                }
              </div>
            </div>
          )
        }
      </UserBaner>
    </Div>
  )
}

export default Users