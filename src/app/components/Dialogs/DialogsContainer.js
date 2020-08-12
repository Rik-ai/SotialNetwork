import Dialogs from './Dialogs'
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../Redux/Reducer/DialogsPageReducer'
import { connect } from 'react-redux'


const mapStateToProps = (state) => {

  return{
    dialogsPage: state.dialogsPageReducer
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    updateNewMessageText: (text) => {
      dispatch(updateNewMessageTextActionCreator(text))
    },
    addNewMessage: () => {
      dispatch(addMessageActionCreator())
    }
  }
}


const DialogsContainer = connect(mapStateToProps, mapDispatchToProps) (Dialogs)

export default DialogsContainer