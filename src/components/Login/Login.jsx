import React from 'react';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
    
    const onSubmit = (formData) => {
        props.logIn(formData);
    };

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
};

export default Login;