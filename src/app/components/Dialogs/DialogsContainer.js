import React from 'react'
import Dialogs from './Dialogs'
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../Redux/Reducer/DialogsPageReducer'
import StoreContext from '../../../StoreContext'


const DialogsContainer =()=>{

  // const state = props.store.getState()


  // const addMessage = ()=>{
  //   props.store.dispatch(addMessageActionCreator())
  // }

  // const onMessageChange =(text)=>{
  //   props.store.dispatch(updateNewMessageTextActionCreator(text))
  // }

 
  return  <StoreContext.Consumer>
    {
      (store) => {
        const state = store.getState()
        const addMessage = ()=>{
          store.dispatch(addMessageActionCreator())
        }
        const onMessageChange =(text)=>{
          store.dispatch(updateNewMessageTextActionCreator(text))
        }
        return <Dialogs 
          updateNewMessageText={onMessageChange}
          addNewMessage={addMessage} 
          dialogsPage={state}
        />
      }
    }
  </StoreContext.Consumer>

}

export default DialogsContainer