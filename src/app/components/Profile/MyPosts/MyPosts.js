import React from 'react'
import styled from '@emotion/styled'
import Post from './Post/Post'

const SideBanner = styled.div`
background-color:#242526;
margin: 450px 0 0 300px;
height: 300px;
width: 900px;
padding: 1rem;
border 1px solid #474a4d;
border-radius: 15px;
color:#dadce1;
font-size: 30px;
overflow-y: auto;
`


const MyPosts = () => {
  return (
    <SideBanner >
      <div> My posts:
        <div>
          <textarea></textarea>
          <button>Add post</button>
          <button>Remove post</button>
        </div>
        <br/>
        <div>New posts</div>
        <br/>
        <Post message="Hi, how are you?" like=" 5 " dislike=" 1"/>
        <br/>
        <Post message="It's my first post" like=" 7 " dislike=" 2"/>


      </div>
    </SideBanner>
  )
}
  
  
export default MyPosts