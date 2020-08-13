import MyPosts from './MyPosts'
import { updateNewPostTextActionCreator, addPostActionCreator } from '../../../Redux/Reducer/ProfilePageReducer'
import { connect } from 'react-redux'



const mapStateToProps = (state)=>{
  return{
    postData:state.profilePageReducer.postData,
    newPostText:state.profilePageReducer.newPostText
  }
}
const mapDispatchToProps = (dispatch)=>{
  return{
    addPost:()=>{
      dispatch(addPostActionCreator())
    },
    updateNewPostText: (text)=>{
      dispatch(updateNewPostTextActionCreator(text))
    }
  }
}

const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps) (MyPosts)
  
  
export default MyPostsContainer