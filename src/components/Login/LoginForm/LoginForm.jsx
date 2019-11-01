import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input } from '../../common/FormControls/FormControls';
import { required } from '../../../utils/validators';

const LoginForm = (props) => {
    return <form onSubmit={props.handleSubmit}>
        <div>
            <Field
                placeholder='email'
                name='email'
                component={Input}
                type='text' 
                validate={[required]} />
        </div>
        <div>
            <Field
                placeholder='password'
                name='password'
                component={Input}
                type='text'
                validate={[required]} />
        </div>
        <div>
            <Field
                name='rememberMe'
                component={Input}
                type='checkbox' /> Remember Me
        </div>
        <button type="submit">Sign In</button>
    </form>
};

export default reduxForm({ form: 'logIn' })(LoginForm);