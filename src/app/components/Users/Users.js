import React from 'react'
import styled from '@emotion/styled'
import userPhoto from '../../assets/images/images.png'
import styles from './styles.module.css'

const Div = styled.div`
margin-top: 10px;
height: 730px;
width: 1490px;
padding: 10px;
border: 1px solid #474a4d;
border-radius: 15px;
color: #dadce1;
font-size: 30px;
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
height: 30px;
width: 1480px;
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
    <div>
      <Div2>
        {pages.map(pages=>{
          return <span className = {props.currentPage === pages && styles.selectedPage} //не работает выделение страницы, потом доработать
            onClick ={(e)=>{props.onPageChanged(pages)}} >{pages}
          </span> 
        })}
      </Div2>
      <Div>
      
        {
          props.users.map( user => 
            <div key ={user.id}>
              <Img src={user.photos.small != null ? user.photos.small : userPhoto} />
              <div>
                <div>{user.name}</div>
                <div>Status: {user.status}</div>
                <div>Country: {'user.location.country'}</div>
                <div>City: {'user.location.city'}</div>
                {user.followed 
                  ? <Button onClick={()=>{props.unfollow(user.id)}}>Unfollow</Button>
                  : <Button onClick={()=>{props.follow(user.id)}}>Follow</Button>}
              </div>
  
               
            </div>
          )
        }
      </Div>
    </div>
  )
}


export default Users