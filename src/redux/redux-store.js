import { createStore, combineReducers } from "redux";
import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';
import usersReducer from "./usersReducer";
import authReducer from "./authReducer";

let reducers = combineReducers({
    profilePage : profileReducer,
    dialogsPage : dialogsReducer,
    navbarFriends : navbarReducer,
    usersPage: usersReducer,
    auth : authReducer
})

let store = createStore(reducers);

window.store = store;

export default store;