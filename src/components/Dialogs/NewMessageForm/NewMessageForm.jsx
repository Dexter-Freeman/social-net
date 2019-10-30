import React from 'react';
import style from './../Dialogs.module.css';
import { Field, reduxForm } from 'redux-form';
import { Textarea } from '../../common/FormControls/FormControls';
import { required, maxLength } from '../../../utils/validators';

const maxLength30 = maxLength(30);


const NewMessageForm = (props) => {
    return <div className={style.sendMessage}>
        <form onSubmit={props.handleSubmit} >
            <div className={style.sendMessageTextarea}>
                <Field
                    placeholder='new message'
                    name='newMessageText'
                    component={Textarea}
                    type='text'
                    validate={[required, maxLength30]} />
            </div>
            <div>
                <button type="submit" >Send message</button>
            </div>
        </form>
    </div>
};

export default reduxForm({ form: 'newMessageForm' })(NewMessageForm);