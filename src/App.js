import React from 'react';
import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Profile from './components/Profile/Profile';
import Dialogs from './components/Dialogs/Dialogs';
import Music from './components/Music/Music';
import Messages from './components/Messages/Messages';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import {BrowserRouter, Route} from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="app-wrapper">
        <Header />
        <Navbar />
        <div className="app-wrapper-content">
          <Route path='/profile' render = {() => <Profile postsData = {props.data.postsData} />} />
          <Route path='/dialogs' render = {() => <Dialogs dialogsData = {props.data.dialogsData} messagesData = {props.data.messagesData} />} />
          <Route path='/messages' component={Messages}/>
          <Route path='/music' component={Music}/>
          <Route path='/news' component={News}/>
          <Route path='/settings' component={Settings}/>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
