import React from 'react';
import style from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { Redirect } from 'react-router-dom';
import NewMessageForm from './NewMessageForm/NewMessageForm';

const Dialogs = (props) => {
    let dialogItems = props.dialogsData
        .map(dialogData => <DialogItem
            name={dialogData.name}
            id={dialogData.id}
            avaUrl={dialogData.avaUrl}
            key={dialogData.id} />);

    let messagesList = props.messagesData
        .map(messageItem => <Message
            messageText={messageItem.messageText}
            key={messageItem.id} />);

    // let newMessage = React.createRef();  // так-как обработка формы теперь осуществляется при помощи redux-form,
                                        // то и изменения текста до отправки обрабатывает redux-form

    // let onSendMessage = () => {
    //     props.onSendMessage();
    // };

    // let onMessageChange = () => {
    //     let text = newMessage.current.value;
    //     props.onMessageChange(text);
    // };

    if (!props.isAuth) {
        return <Redirect to='/login' />
    };

    const onSubmit = (formData) => {
        props.onSendMessage(formData.newMessageText);
    };

   
    return (
        <div className={style.dialogs}>
            <div className={style.dialogsList}>
                <span className={style.DialogsHeader}>Dialogs list</span>
                {dialogItems}
            </div>
            <div className={style.messages}>
                {messagesList}

                <NewMessageForm  onSubmit={onSubmit} />

            </div>

        </div>
    )
}

export default Dialogs;