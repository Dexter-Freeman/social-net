import React from 'react';
import { authAPI } from '../../api/api';
import LoginForm from './LoginForm/LoginForm';

const Login = (props) => {
    const onSubmit = (formData) => {
        let { email, password, rememberMe } = { ...formData }
        authAPI.authLogin(email, password, rememberMe).then(data => {
            if (data.resultCode === 0) {
                console.log(`resultData = ${JSON.stringify(data)}`)
                // return <Redirect to={`/profile/${data.data.userId}`} />
            }
        })
    };

    return <div>
        <h1>Login</h1>
        <LoginForm onSubmit={onSubmit} />
    </div>
};

export default Login;