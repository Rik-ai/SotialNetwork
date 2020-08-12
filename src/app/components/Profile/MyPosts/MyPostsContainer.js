import React from 'react'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/Reducer/ProfilePageReducer'
import MyPosts from './MyPosts'
import StoreContext from '../../../../StoreContext'



const MyPostsContainer = () => {
  // const state = props.store.getState()

  // const addPost=()=>{
  //   props.store.dispatch(addPostActionCreator())
  // }

  // const onPostChange = (text)=>{
  //   props.store.dispatch(updateNewPostTextActionCreator(text))
  // }

  return (
    <StoreContext.Consumer>
      {

        (store) => {
          const state = store.getState()
       
          const addPost=()=>{
            store.dispatch(addPostActionCreator())
          }
      
          const onPostChange = (text)=>{
            store.dispatch(updateNewPostTextActionCreator(text))
          }
          return <MyPosts
            updateNewPostText={onPostChange} 
            addPost={addPost} 
            postData={state.profilePageReducer.postData}
            newPostText={state.profilePageReducer.newPostText}
          />
        }
      }
    </StoreContext.Consumer>
  )
}
  
  
export default MyPostsContainer