import { actionCreateSendMessage, actionCreateChangeNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import {connect} from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirectComponent';

const mapStateToProps = (state) => {
    return {
        dialogsData: state.dialogsPage.dialogsData,
        messagesData: state.dialogsPage.messagesData,
        newMessageText: state.dialogsPage.newMessageText
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

const AuthRedirectComponent = withAuthRedirect(Dialogs)

const DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(AuthRedirectComponent);

export default DialogsContainer;