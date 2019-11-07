import React from 'react';
import LoginForm from './LoginForm/LoginForm';
import { Redirect } from 'react-router-dom';

const Login = ({logIn, isAuth, id}) => {
    
    const onSubmit = (formData) => {
        logIn(formData);
    };

    if (isAuth) {
        return <Redirect to={`/profile/${id}`} />
    }

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
};

export default Login;