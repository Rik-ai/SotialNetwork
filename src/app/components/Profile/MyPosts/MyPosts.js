import React from 'react'
import styled from '@emotion/styled'
import Post from './Post/Post'

const SideBanner = styled.div`
background-color:#242526;
margin: 450px 0 0 300px;
height: 300px;
width: 1000px;
padding: 1rem;
border 1px solid #474a4d;
border-radius: 15px;
color:#dadce1;
font-size: 25px;
overflow-y: auto;
`
const But = styled.div`
padding-left:5px;
display: inline-block;
`
const PostStyle = styled.div`
margin-top:20px;
`


const MyPosts = (props) => {


  const postElement = props.postData.map(post => <Post message={post.message} like={post.likesCount} dislike={post.dislikeCount}/>)

  return (
    <SideBanner >
      <div>
        <h3>My posts:</h3>
        <div>

          <div>
            <textarea/>
          </div>

          <But>
            <button>Add post</button>
          </But>

          <But>
            <button>Remove post</button>
          </But>

        </div>
        <PostStyle>
          {postElement}
        </PostStyle>
      </div>
    </SideBanner>
  )
}
  
  
export default MyPosts