import React from 'react';
import { Field, reduxForm } from 'redux-form';

const NewPostForm = (props) => {
    return <div>
        <form onSubmit={props.handleSubmit} >
            <div>
                <Field placeholder='new post' name='newPostText' component='textarea' type='text' />
            </div>
            <div>
                <button type="submit" >Add post</button>
            </div>
        </form>
    </div>
};

export default reduxForm({ form: 'newPostForm' })(NewPostForm);