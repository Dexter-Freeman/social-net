import { userProfileAPI } from './../api/api';
import { stopSubmit } from 'redux-form';

const ADD_POST = 'ADD_POST';
// const changeNewPostText = 'changeNewPostText';
const Set_User_Profile = 'Set_User_Profile';
const Set_User_Status = 'Set_User_Status';
const DELETE_POST = 'DELETE_POST';
const SAVE_PHOTO_SUCCSESS = 'SAVE_PHOTO_SUCCSESS';

const initialState = {
    profile: null,
    postsData: [{
        id: 1,
        postText: "First post",
        likesCount: 5
    },
    {
        id: 2,
        postText: "Second post",
        likesCount: 3
    },
    {
        id: 3,
        postText: "some text",
        likesCount: 25
    },
    {
        id: 4,
        postText: "more some text",
        likesCount: 1
    }
    ],
    status: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST: {
            const id = state.postsData.length + 1;
            const newPost = {
                id: id,
                postText: action.newPostText,
                likesCount: 0
            };
            return {
                ...state,
                postsData: [...state.postsData, newPost]
            };
        }

        // case changeNewPostText:
        //     return {...state, newPostText : action.newPostText};

        case Set_User_Profile:
            return { ...state, profile: action.profile }

        case Set_User_Status:
            return { ...state, status: action.status }

        case DELETE_POST:
            return { ...state, postsData: state.postsData.filter(post => post.id !== action.postId) }

        case SAVE_PHOTO_SUCCSESS:
            return { ...state, profile : { ...state.profile, photos : action.photos } }

        default:
            return state;
    }
};

export const actionCreateAddPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
});

export const deletePostAC = (postId) => ({
    type: DELETE_POST,
    postId
});

// const actionCreateChangeNewPostText = (newPostText) => ({
//     type: changeNewPostText,
//     newPostText: newPostText
// });

const setUserProfile = (profile) => ({
    type: Set_User_Profile,
    profile
});

const setUserStatus = (status) => ({
    type: Set_User_Status,
    status
});

const savePhotoSuccsess = (photos) => ({
    type: SAVE_PHOTO_SUCCSESS,
    photos
});


const addPost = (newPostText) => (dispatch) => {
    dispatch(actionCreateAddPost(newPostText));
};

const getUserProfile = (userId) => async (dispatch) => {  // Thunk creator
    const profile = await userProfileAPI.getUserProfile(userId);
    dispatch(setUserProfile(profile));
};

const getUserStatus = (userId) => async (dispatch) => {
    const status = await userProfileAPI.getUserStatus(userId);
    dispatch(setUserStatus(status));
};

const updateUserStatus = (status) => async (dispatch) => {
    const response = await userProfileAPI.updateUserStatus(status);
    if (response.resultCode === 0) {
        debugger
        dispatch(setUserStatus(status))
    } else console.log(`somesing wrong, status didn't change. response -  ${JSON.stringify(response.messages)}`);
};

const saveFoto = (photo) => async (dispatch) => {
    const response = await userProfileAPI.updateUserPhoto(photo);
    if (response.resultCode === 0) {
        dispatch(savePhotoSuccsess(response.data.photos));
    } else console.log(`somesing wrong, ava didn't change. response -  ${JSON.stringify(response.messages)}`);
};

const updateUserProfile = (profile) => async (dispatch, getState) => {
    const userId = getState().auth.userId;
    const response = await userProfileAPI.updateUserProfile(profile);
    if (response.resultCode === 0) {
        dispatch(getUserProfile(userId));
    } else {
        dispatch(stopSubmit('profileDataForm', { _error: `${response.messages[0]}` }));
        return Promise.reject(response.messages[0]);
    }
};

export { addPost, getUserProfile, getUserStatus, updateUserStatus, saveFoto, updateUserProfile };
export default profileReducer;