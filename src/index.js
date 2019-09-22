import './index.css';
import * as serviceWorker from './serviceWorker';
import state from './redux/state';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, sendMessage, changeNewMessageText, changeNewPostText, subscribe } from './redux/state';

const rerenderTree = (state) => {
    ReactDOM.render(<App 
        state = {state} 
        addPost = {addPost} 
        sendMessage = {sendMessage} 
        changeNewMessageText = {changeNewMessageText} 
        changeNewPostText = {changeNewPostText} />, 
    document.getElementById('root'));
}

rerenderTree(state);

subscribe(rerenderTree);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
