import React from 'react'
import styled from '@emotion/styled'
import MyPosts from './MyPosts/MyPosts'
import ProfileInfo from './ProfileInfo/ProfileInfo'

const SideBanner = styled.div`
background-color:#242526;
margin: 30px 0 0 300px;
height: 100%;
width: 100%;
padding: 1rem;
border 1px solid #474a4d;
border-radius: 15px;
color:#dadce1;
font-size: 2em;
`


const Profile = (props) => {


  return (
    <SideBanner >
      <ProfileInfo/>
      <MyPosts postData={props.postData}/>
    </SideBanner>
  )
}
  
  
export default Profile