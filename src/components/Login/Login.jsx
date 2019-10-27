import React from 'react';
import { Field, reduxForm } from 'redux-form';
import { authAPI } from '../../api/api';

let LoginForm = (props) => {
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

LoginForm = reduxForm({ form: 'logIn' })(LoginForm)

const Login = (props) => {
    const onSubmit = (formData) => {
        let {email, password, rememberMe} = {...formData}
        authAPI.authLogin(email, password, rememberMe);
    };
    
    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit}/>
    </div>
}

export default Login;