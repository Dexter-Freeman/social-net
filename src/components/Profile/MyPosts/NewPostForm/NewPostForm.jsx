import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { required, maxLength } from './../../../../utils/validators';
import { Textarea } from '../../../common/FormControls/FormControls';

const maxLength10 = maxLength(10); //Нужно создавать вне компоненты, иначе будет бесконечная отрисовка
const NewPostForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field
                    validate={[required, maxLength10]}
                    placeholder='new post'
                    name='newPostText'
                    component={Textarea}
                    type='text' />
            </div>
            <div>
                <button type="submit" >Add post</button>
            </div>
        </form>
    </div>
};

export default reduxForm({ form: 'newPostForm' })(NewPostForm);