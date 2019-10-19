import { actionCreateSendMessage, actionCreateChangeNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText,
        isAuth : state.auth.isAuth
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        onSendMessage: () => {
            dispatch(actionCreateSendMessage());
        },
        onMessageChange: (text) => {
            dispatch(actionCreateChangeNewMessageText(text));
        }
    }
};

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);

export default DialogsContainer;