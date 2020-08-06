const ADD_POST = 'ADD-POST'
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT'
const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const store ={
  _state: {
    profilePage:{
      postData:[
        {id: 1, message: 'Hi, how are you?', likesCount: 5, dislikeCount: 1},
        {id: 2, message: "It's my first post", likesCount: 7, dislikeCount: 2},
        {id: 3, message: 'Hi, how are you?', likesCount: 5, dislikeCount: 1},
        {id: 4, message: 'Hi, how are you?', likesCount: 5, dislikeCount: 1}
      ],
      newPostText:'Hello everybody !'
    },
    dialogsPage:{
      userData: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Andry'},
        {id: 4, name: 'Jin'},
        {id: 5, name: 'Viktor'},
        {id: 6, name: 'Anna'}
      ],
     
      messagesData: [
        {id: 1, message: 'Hello'},
        {id: 2, message: 'How are you ?'},
        {id: 3, message: 'Wtf man?'},
        {id: 4, message: 'You are the best !!'},
        {id: 5, message: 'Why nobody love me ?'},
        {id: 6, message: 'Yo'}
      ],
      newMessageText:'My brain is crazy !'
    },
    leftBar:{
      friendsData: [
        {id: 1, name: 'Ivan'},
        {id: 2, name: 'Maria'},
        {id: 3, name: 'Andry'}
      ]
    }
  },
  _rerenderEntireTree (){
    console.log('state was changed')
  },


  getState(){
    return this._state
  },
  subscribe (observer) {
    this._rerenderEntireTree = observer
  },


  // addPost (){
  //   const newPost={
  //     id: 5,
  //     message: this._state.profilePage.newPostText,
  //     likesCount: 0,
  //     dislikeCount: 0
  //   }
  //   this._state.profilePage.postData.push(newPost)
  //   this._state.profilePage.newPostText = ''
  //   this._rerenderEntireTree(this._state)
  // },
  // updateNewPostText (newText){

  //   this._state.profilePage.newPostText = newText
  //   this._rerenderEntireTree(this._state)
  // },

  // addMessage  (){
  //   const newMessage={
  //     id:7,
  //     message: this._state.dialogsPage.newMessageText
  //   }
  //   this._state.dialogsPage.messagesData.push(newMessage)
  //   this._state.dialogsPage.newMessageText = ''
  //   this._rerenderEntireTree(this._state)
  // },
  // updateNewMessageText  (newMessage){
  //   this._state.dialogsPage.newMessageText = newMessage
  //   this._rerenderEntireTree(this._state)
  // },

  dispatch(action){

    if (action.type === ADD_POST){
      const newPost={
        id: 5,
        message: this._state.profilePage.newPostText,
        likesCount: 0,
        dislikeCount: 0
      }
      this._state.profilePage.postData.push(newPost)
      this._state.profilePage.newPostText = ''
      this._rerenderEntireTree(this._state)

    }else if(action.type === UPDATE_NEW_POST_TEXT){
      this._state.profilePage.newPostText = action.newText
      this._rerenderEntireTree(this._state)

    } else if (action.type===ADD_MESSAGE){
      const newMessage={
        id:7,
        message: this._state.dialogsPage.newMessageText
      }
      this._state.dialogsPage.messagesData.push(newMessage)
      this._state.dialogsPage.newMessageText = ''
      this._rerenderEntireTree(this._state)

    }else if(action.type===UPDATE_NEW_MESSAGE_TEXT){
      this._state.dialogsPage.newMessageText = action.newMessage
      this._rerenderEntireTree(this._state)
    }
  }
}
export const addPostActionCreator=()=>({type:ADD_POST})
export const updateNewPostTextActionCreator=(text)=>
  ({type:UPDATE_NEW_POST_TEXT,newText:text})

export const addMessageActionCreator = ()=>({type:ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text)=>
  ({type:UPDATE_NEW_MESSAGE_TEXT,newMessage: text})

export default store