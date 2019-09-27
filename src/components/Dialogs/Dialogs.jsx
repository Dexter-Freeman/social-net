import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import {actionCreateSendMessage, actionCreateChangeNewMessageText} from './../../redux/dialogsReducer';

const Dialogs = (props) => {
    let dialogItems = props.state.dialogsData
        .map(dialogData => <DialogItem name={dialogData.name} id={dialogData.id}  avaUrl = {dialogData.avaUrl} />);

    let messagesList = props.state.messagesData
        .map(messageItem => <Message messageText={messageItem.messageText} />);
    
    let newMessage = React.createRef();

    let sendMessage = () => {
        props.dispatch(actionCreateSendMessage());
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.dispatch(actionCreateChangeNewMessageText(text));
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <span className={style.DialogsHeader}>Dialogs list</span>
                {dialogItems}
            </div>
            <div className={style.messages}>
                {messagesList}

                <div className={style.sendMessage}>
                    <div className={style.sendMessageTextarea}>
                        <textarea 
                            ref={ newMessage } 
                            value = {props.state.newMessageText} 
                            onChange = { onMessageChange } />
                    </div>
                    <div>
                        <button onClick={sendMessage} >Send message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;