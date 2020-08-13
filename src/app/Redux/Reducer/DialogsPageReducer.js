const ADD_MESSAGE = 'ADD-MESSAGE'
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT'

const initialState = {
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
}

const dialogsPageReducer = (state = initialState,action) =>{

  switch(action.type){
    case ADD_MESSAGE:{
      const newMessage={
        id:7,
        message: state.newMessageText
      }

      const stateCopy = {...state}
      stateCopy.userData = [...state.userData]
      stateCopy.messagesData = [...state.messagesData]
      stateCopy.messagesData.push(newMessage)
      stateCopy.newMessageText = ''
      return stateCopy
    }
    case UPDATE_NEW_MESSAGE_TEXT:{
      const stateCopy = {...state}
      stateCopy.newMessageText = action.newMessage
      return stateCopy
    }
    default:
      return state
  }
}

export const addMessageActionCreator = ()=>({type:ADD_MESSAGE})
export const updateNewMessageTextActionCreator = (text)=>
  ({type:UPDATE_NEW_MESSAGE_TEXT,newMessage: text})
    

export default dialogsPageReducer

