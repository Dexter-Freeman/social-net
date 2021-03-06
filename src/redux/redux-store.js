import { createStore, combineReducers, applyMiddleware } from 'redux';
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';
import usersReducer from './usersReducer';
import authReducer from './authReducer';
import thunk from 'redux-thunk';
import { reducer as formReducer } from 'redux-form';
import appReducer from './appReducer';

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    navbarFriends : navbarReducer,
    usersPage: usersReducer,
    auth : authReducer,
    form : formReducer,
    appState : appReducer
})

let store = createStore(reducers, applyMiddleware(thunk));

window.store = store;

export default store;