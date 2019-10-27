import React from 'react';
import { Field, reduxForm } from 'redux-form';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field placeholder='email' name='email' component='input' type='text' />
        </div>
        <div>
            <Field placeholder='password' name='password' component='input' type='text' />
        </div>
        <div>
            <Field name='rememberMe' component='input' type='checkbox'/> rememberMe
        </div>
        <button type="submit">Log in</button>
    </form>
};

export default reduxForm({ form: 'logIn' })(LoginForm);