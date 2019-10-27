import React from 'react';
import style from './../Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';

const NewMessageForm = (props) => {
    return <div className={style.sendMessage}>
        <form onSubmit={props.handleSubmit} >
            <div className={style.sendMessageTextarea}>
                <Field placeholder='new message' name='newMessageText' component='textarea' type='text' />
            </div>
            <div>
                <button type="submit" >Send message</button>
            </div>
        </form>
    </div>
};

export default reduxForm({ form: 'newMessageForm' })(NewMessageForm);