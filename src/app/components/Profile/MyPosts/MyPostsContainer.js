import React from 'react'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/Reducer/ProfilePageReducer'
import MyPosts from './MyPosts'



const MyPostsContainer = (props) => {
  const state = props.store.getState()

  const addPost=()=>{
    props.store.dispatch(addPostActionCreator())
  }

  const onPostChange = (text)=>{
    props.store.dispatch(updateNewPostTextActionCreator(text))
  }

  return (<MyPosts
    updateNewPostText={onPostChange} 
    addPost={addPost} 
    postData={state.profilePageReducer.postData}
    newPostText={state.profilePageReducer.newPostText}
  />
  )
}
  
  
export default MyPostsContainer