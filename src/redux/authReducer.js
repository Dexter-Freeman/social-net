import {authAPI} from './../api/api';
import { stopSubmit } from 'redux-form';

const Set_Users_Data = 'Set_Users_Data';
const SET_LOGINED_USER_DATA = 'SET_LOGINED_USER_DATA';

const initialState = {
    isFetching: false,
    id: null,
    email: '',
    userName: '',
    isAuth: null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case Set_Users_Data:
            return { ...state, ...action.data }
        case SET_LOGINED_USER_DATA:
                return { ...state, id : action.id, isAuth: true }

        default:
            return state;
    }
};

const setAuthUserData = (id, email, userName, isAuth) => ({
    type: Set_Users_Data,
    data: {
        id,
        email,
        userName,
        isAuth
    }
});

const getAuthUserData = () => (dispatch) => {
    return authAPI.authMe()
        .then((data) => {
            if (data.resultCode === 0) {
                let { id, email, login  } = data.data;
                dispatch(setAuthUserData(id, email, login, true));
            }
        })
};

const logIn = (formData) => (dispatch) => {
    let { email, password, rememberMe = false } = { ...formData }
        authAPI.logIn(email, password, rememberMe).then(data => {
                if (data.resultCode === 0) {
                    dispatch(getAuthUserData());
                } else if (data.resultCode === 1) {
                    // let action = stopSubmit('logIn', {_error : `${data.messages[0]}`});
                    dispatch(stopSubmit('logIn', {_error : `${data.messages[0]}`}));
                }
            })
};

const logOut = () => (dispatch) => {
    authAPI.logOut().then(data => {
        if (data.resultCode === 0) {
            dispatch(setAuthUserData(null, null, null, false));
        }
    })
};

export { getAuthUserData, logIn, logOut };
export default authReducer;