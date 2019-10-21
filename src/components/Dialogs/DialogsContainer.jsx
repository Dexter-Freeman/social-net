import { actionCreateSendMessage, actionCreateChangeNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import { connect } from 'react-redux';
import withAuthRedirect from '../../hoc/withAuthRedirectComponent';
import { compose } from 'redux';

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

export default compose(
    connect(mapStateToProps, mapDispatchToProps),
    withAuthRedirect
)(Dialogs);