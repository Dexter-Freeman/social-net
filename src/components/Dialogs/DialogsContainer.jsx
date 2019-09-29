import React from 'react';
import { actionCreateSendMessage, actionCreateChangeNewMessageText } from '../../redux/dialogsReducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';

const DialogsContainer = (props) => {
    return (
        <StoreContext.Consumer>
            {(store) => {
                const state = store.getState().dialogsPage;
                const dialogsData = state.dialogsData;
                const messagesData = state.messagesData;
                const newMessageText = state.newMessageText;

                const onSendMessage = () => {
                    store.dispatch(actionCreateSendMessage());
                }

                let onMessageChange = (text) => {
                    store.dispatch(actionCreateChangeNewMessageText(text));
                }

                return <Dialogs
                    dialogsData={dialogsData}
                    messagesData={messagesData}
                    newMessageText={newMessageText}
                    onSendMessage={onSendMessage}
                    onMessageChange={onMessageChange} />
            }}
        </StoreContext.Consumer>
    )

}

export default DialogsContainer;