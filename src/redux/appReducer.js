import { getAuthUserData } from './authReducer';

const INITIALIZED_SUCSESS = 'INITIALIZED_SUCSESS';

const initialState = {
    initialized : false
};

const appReducer = (state = initialState, action) => {
    switch (action.type) {

        case INITIALIZED_SUCSESS:
            return { ...state, initialized : true }
        
        default:
            return state;
    }
};

const setInitialized = () => ({
    type: INITIALIZED_SUCSESS
});

const initializeApp = () => (dispatch) => {
    let promise = dispatch(getAuthUserData());
    promise.then(() => {
        dispatch(setInitialized())
    })
};

export { initializeApp };
export default appReducer;