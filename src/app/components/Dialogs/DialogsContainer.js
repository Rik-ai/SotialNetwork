import React from 'react'
import Dialogs from './Dialogs'
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../Redux/Reducer/DialogsPageReducer'


const DialogsContainer =(props)=>{
  console.log(props)
  const state = props.store.getState()


  const addMessage = ()=>{
    props.store.dispatch(addMessageActionCreator())
  }

  const onMessageChange =(text)=>{
    props.store.dispatch(updateNewMessageTextActionCreator(text))
  }

 
  return <Dialogs updateNewMessageText={onMessageChange} addNewMessage={addMessage} dialogsPage={state}/>
}

export default DialogsContainer