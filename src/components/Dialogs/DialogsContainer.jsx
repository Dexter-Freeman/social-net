import React from 'react';
import {actionCreateSendMessage, actionCreateChangeNewMessageText} from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';

const DialogsContainer = (props) => {
    const state = props.store.getState().dialogsPage;
    const dialogsData = state.dialogsData;
    const messagesData = state.messagesData;
    const newMessageText = state.newMessageText;

    const onSendMessage = () => {
        props.store.dispatch(actionCreateSendMessage());
    }

    let onMessageChange = (text) => {
        props.store.dispatch(actionCreateChangeNewMessageText(text));
    }

    return <Dialogs 
        dialogsData = {dialogsData} 
        messagesData = {messagesData}
        newMessageText = {newMessageText}
        onSendMessage = {onSendMessage}
        onMessageChange = {onMessageChange} />
}

export default DialogsContainer;