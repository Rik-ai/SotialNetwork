import React from 'react'
import styled from '@emotion/styled'
import Post from './Post/Post'

const PostBaner = styled.div`
background-color:#242526;
margin: 300px 0 0 50px;
height: 450px;
width: 1400px;
padding: 1rem;
border 1px solid #474a4d;
border-radius: 15px;
color:#dadce1;
font-size: 25px;
overflow-y: auto;
`
const Button = styled.button`
padding-left:5px;
display: inline-block;
font-family:inherit;
font-size:16px;
`
const PostStyle = styled.div`
margin-top:20px;
`
const TextArea = styled.textarea`
font-family:inherit;
font-size:16px;
display:block;
width:600px;
min-height:30px;
max-height:100px;
padding: 10px 12px;
border 1px solid #474a4d;
resize:vertical;
`




const MyPosts = (props) => {

  const postElement = props.postData
    .map(post => <Post message={post.message} key={post.id} like={post.likesCount} dislike={post.dislikeCount}/>)

  const onAddPost=()=>{
    props.addPost()
  }

  const onPostChange = (event)=>{
    const text = event.target.value
    props.updateNewPostText(text)
  }

  return (
    <PostBaner >
      <div>
        <h3>My posts:</h3>
        <div>
          <div>
            <TextArea 
              onChange={onPostChange}
              placeholder='Enter your message...'
              value={props.newPostText}
            />
          </div>
          <Button onClick={onAddPost}>Add post</Button>

        </div>
        <PostStyle>
          {postElement}
        </PostStyle>
      </div>
    </PostBaner>
  )
}
  
  
export default MyPosts