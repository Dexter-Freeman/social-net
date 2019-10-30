import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { Input, Checkbox } from '../../common/FormControls/FormControls';
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
                type='checkbox' /> rememberMe
        </div>
        <button type="submit">Log in</button>
    </form>
};

export default reduxForm({ form: 'logIn' })(LoginForm);