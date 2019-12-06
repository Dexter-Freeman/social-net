import { authAPI, securityAPI } from './../api/api';
import { stopSubmit } from 'redux-form';

const Set_Users_Data = 'Set_Users_Data';
const SET_LOGINED_USER_DATA = 'SET_LOGINED_USER_DATA';
const SET_CAPTCHA_URL_SUCCSESS = 'SET_CAPTCHA_URL_SUCCSESS'; 

const initialState = {
    isFetching: false,
    userId: null,
    email: '',
    userName: '',
    isAuth: null,
    captchaURL : null
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case Set_Users_Data:
            return { ...state, ...action.data }
        case SET_LOGINED_USER_DATA:
            return { ...state, userId: action.userId, isAuth: true }
        case SET_CAPTCHA_URL_SUCCSESS: 
            return { ...state, captchaURL : action.data }

        default:
            return state;
    }
};

const setAuthUserData = (userId, email, userName, isAuth) => ({
    type: Set_Users_Data,
    data: {
        userId,
        email,
        userName,
        isAuth
    }
});

const setCaptchaURL = (captchaURL) => ({
    type : SET_CAPTCHA_URL_SUCCSESS,
    data : captchaURL
})

const getAuthUserData = () => async (dispatch) => {
    const data = await authAPI.authMe();
    if (data.resultCode === 0) {
        const { id, email, login } = data.data;
        dispatch(setAuthUserData(id, email, login, true));
    }
};

const getCaptcha = () => async (dispatch) => {
    const response = await securityAPI.getCaptcha();
    const captchaURL = response.url;
    dispatch( setCaptchaURL( captchaURL ));
};

const logIn = ( formData ) => async ( dispatch ) => {
    const { email, password, rememberMe = false, captcha = null } = { ...formData }
    const data = await authAPI.logIn( email, password, rememberMe, captcha );
    if ( data.resultCode === 0 ) {
        dispatch( getAuthUserData() );

    } else {
        if ( data.resultCode === 10 ) {
            dispatch( getCaptcha() );
        }
        dispatch( stopSubmit( 'logIn', { _error: `${data.messages[0]}` } ) );
    };
};

const logOut = () => async (dispatch) => {
    const data = await authAPI.logOut();
    if (data.resultCode === 0) {
        dispatch(setAuthUserData(null, null, null, false));
    }
};

export { getAuthUserData, logIn, logOut };
export default authReducer;