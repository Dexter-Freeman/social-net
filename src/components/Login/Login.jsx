import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { Redirect } from 'react-router-dom';

const Login = (props) => {
    
    const onSubmit = (formData) => {
        props.logIn(formData);
    };

    if (props.isAuth) {
        return <Redirect to={`/profile/${props.id}`} />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
};

export default Login;