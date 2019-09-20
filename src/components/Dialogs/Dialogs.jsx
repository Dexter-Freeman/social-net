import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogItems = props.state.dialogsData
        .map(dialogData => <DialogItem name={dialogData.name} id={dialogData.id}  avaUrl = {dialogData.avaUrl} />);

    let messagesList = props.state.messagesData
        .map(messageItem => <Message messageText={messageItem.messageText} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <span className={style.DialogsHeader}>Dialogs list</span>
                {dialogItems}
            </div>
            <div className={style.messages}>
                {messagesList}
            </div>

        </div>
    )
}

export default Dialogs;