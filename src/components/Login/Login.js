import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { Redirect } from 'react-router-dom';

const Login = ({logIn, isAuth, userId, captchaURL}) => {
    const onSubmit = (formData) => {
        logIn(formData);
    };
debugger
    if (isAuth) {
        return <Redirect to={`/profile/${userId}`} />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} captchaURL={captchaURL} />
    </div>
};

export default Login;