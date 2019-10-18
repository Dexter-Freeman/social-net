import usersAPI from './../api/api';

const Set_Users_Data = 'Set_Users_Data';

const initialState = {
    isFetching: false,
    id: null,
    email: 'blabla@bla.bla',
    login: 'samurai',
    isAuth: false
};

const authReducer = (state = initialState, action) => {
    switch (action.type) {

        case Set_Users_Data:
            return { ...state, ...action.data, isAuth: true }

        default:
            return state;
    }
};

const setAuthUserData = (id, email, login) => ({
    type: Set_Users_Data,
    data: {
        id,
        email,
        login
    }
});

const setAuthUserDataTC = () => (dispatch) => {
    usersAPI.authMe()
        .then((data) => {
            if (data.resultCode === 0) {
                let { id, email, login } = data.data;
                dispatch(setAuthUserData(id, email, login));
            }
        })
}

export { setAuthUserDataTC };
export default authReducer;