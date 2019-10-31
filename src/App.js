import React from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import Music from './components/Music/Music';
import News from './components/News/News';
import Settings from './components/Settings/Settings';
import { Route } from 'react-router-dom';
import UsersContainer from './components/Users/UsersContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import HeaderContainer from './components/Header/HeaderContainer';
import LoginPage from './components/Login/LoginContainer';

function App(props) {
	return (
		<div className="app-wrapper">
			<HeaderContainer />
			<Navbar />
			<div className="app-wrapper-content">
				<Route path='/login'
					render={() => <LoginPage />} />
				<Route path='/profile/:userId?'
					render={() => <ProfileContainer />} />

				<Route path='/dialogs'
					render={() => <DialogsContainer />} />

				<Route path='/users'
					render={() => <UsersContainer />} />

				<Route path='/music' component={Music} />
				<Route path='/news' component={News} />
				<Route path='/settings' component={Settings} />
			</div>
		</div>
	);
}

export default App;
