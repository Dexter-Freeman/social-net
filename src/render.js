import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { addPost, sendMessage, changeNewMessageText, changeNewPostText } from './redux/state';

const rerenderTree = (state) => {
    ReactDOM.render(<App 
        state = {state} 
        addPost = {addPost} 
        sendMessage = {sendMessage} 
        changeNewMessageText = {changeNewMessageText} 
        changeNewPostText = {changeNewPostText} />, 
    document.getElementById('root'));
}

export default rerenderTree;