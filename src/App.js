import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar state = {props.state.navbarFriends}/>
        <div className="app-wrapper-content">

          <Route path='/profile' 
            render = {() => <Profile 
              state = {props.state.profilePage} 
              addPost = {props.addPost}
              changeNewPostText = {props.changeNewPostText} />} />

          <Route path='/dialogs' 
            render = {() => <Dialogs 
              state = {props.state.dialogsPage} 
              sendMessage = {props.sendMessage} 
              changeNewMessageText = {props.changeNewMessageText} />} />

          <Route path='/music' component={Music}/>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
