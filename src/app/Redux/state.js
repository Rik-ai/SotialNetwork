let rerenderEntireTree = ()=>{
  console.log('state was changed')
}

const state = {
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
}
  
export const addPost =() =>{
  const newPost={
    id: 5,
    message: state.profilePage.newPostText,
    likesCount: 0,
    dislikeCount: 0
  }
  state.profilePage.postData.push(newPost)
  state.profilePage.newPostText = ''
  rerenderEntireTree(state)
}

export const updateNewPostText =(newText) =>{

  state.profilePage.newPostText = newText
  rerenderEntireTree(state)
}

export const addMessage = () =>{
  const newMessage={
    id:7,
    message: state.dialogsPage.newMessageText
  }
  state.dialogsPage.messagesData.push(newMessage)
  state.dialogsPage.newMessageText = ''
  rerenderEntireTree(state)
}

export const updateNewMessageText = (newMessage)=>{
  state.dialogsPage.newMessageText = newMessage
  rerenderEntireTree(state)
}

export const subscribe = (observer) =>{
  rerenderEntireTree = observer
}

export default state