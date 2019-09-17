import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    let dialogsData = [
        {id : 1, name : 'User 1'},
        {id : 2, name : 'User 2'},
        {id : 3, name : 'User 3'},
        {id : 4, name : 'User 4'},
        {id : 5, name : 'User 5'},
        {id : 6, name : 'User 6'},
        {id : 7, name : 'User 7'}
    ];

    let dialogItem = dialogsData
        .map(dialogData => <DialogItem name={dialogData.name} id={dialogData.id} />);

    let messagesData = [
        {id : 1, messageText : "Hello! How are you?"},
        {id : 1, messageText : "I'm develope my own social network"},
        {id : 1, messageText : "Wow! It's amazing!"},
        {id : 1, messageText : "Yes!"}
    ];

    let messagesList = messagesData
        .map(messageItem => <Message messageText={messageItem.messageText} />);

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <span className={style.DialogsHeader}>Dialogs list</span>
                {dialogItem}
            </div>
            <div className={style.messages}>
                {messagesList}
            </div>

        </div>
    )
}

export default Dialogs;