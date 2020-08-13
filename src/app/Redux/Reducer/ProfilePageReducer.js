const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'

const initialState = {
  postData:[
    {id: 1, message: 'Hi, how are you?', likesCount: 5, dislikeCount: 1},
    {id: 2, message: "It's my first post", likesCount: 7, dislikeCount: 2},
    {id: 3, message: 'Hi, how are you?', likesCount: 5, dislikeCount: 1},
    {id: 4, message: 'Hi, how are you?', likesCount: 5, dislikeCount: 1}
  ],
  newPostText:'Hello everybody !'
}

const profilePageReducer = (state = initialState,action) =>{
  switch(action.type){
    case ADD_POST: {
      return {
        ...state,
        newPostText: '',
        postData: [...state.postData, {id: 5, message: state.newPostText, likesCount: 0, dislikeCount: 0}]
      }
    }
    case UPDATE_NEW_POST_TEXT: {
      return {
        ...state,
        newPostText: action.newText
      }
    }
    default:
      return state
  }
}

export const addPostActionCreator=()=>({type:ADD_POST})
export const updateNewPostTextActionCreator=(text)=>
  ({type:UPDATE_NEW_POST_TEXT,newText:text})

export default profilePageReducer





  