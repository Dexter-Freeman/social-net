import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';

const Dialogs = (props) => {
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <span className={style.DialogsHeader}>Dialogs list</span>
                <DialogItem name='User 1' id='1' />
                <DialogItem name='User 2' id='2' />
                <DialogItem name='User 3' id='3' />
                <DialogItem name='User 4' id='4' />
                <DialogItem name='User 5' id='5' />
            </div>
            <div className={style.messages}>
                <Message messageText=' Hello! How are you?'/>
                <Message messageText="I'm develope my own social network"/>
                <Message messageText="Wow! It's amazing!"/>
                <Message messageText='Yes!'/>
            </div>

        </div>
    )
}

export default Dialogs;