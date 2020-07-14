import React from 'react'
import styled from '@emotion/styled'

const SideBanner = styled.div`
background-color:#242526;
margin: 30px 0 0 300px;
height: 100%;
width: 1500px;
padding: 1rem;
border 1px solid #474a4d;
border-radius: 15px;
color:white;
font-size: 2em;
`



const Profile = () => {
  return (
    <SideBanner >
      <div>Avatar</div>
      <div> My posts
        <div>New posts</div>
        <div>Post 1</div>
        <div>Post 2</div>
      </div>
    </SideBanner>
  )
}
  
  
export default Profile