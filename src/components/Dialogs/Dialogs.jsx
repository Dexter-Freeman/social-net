import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogItems = props.dialogsData
        .map(dialogData => <DialogItem name={dialogData.name} id={dialogData.id}  avaUrl = {dialogData.avaUrl} />);

    let messagesList = props.messagesData
        .map(messageItem => <Message messageText={messageItem.messageText} />);
    
    let newMessage = React.createRef();

    let onSendMessage = () => {
        props.onSendMessage();
    }

    let onMessageChange = () => {
        let text = newMessage.current.value;
        props.onMessageChange(text);
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
                            value = { props.newMessageText } 
                            onChange = { onMessageChange } />
                    </div>
                    <div>
                        <button onClick={ onSendMessage } >Send message</button>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Dialogs;