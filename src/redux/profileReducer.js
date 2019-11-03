import {userProfileAPI} from './../api/api';

const ADD_POST = 'ADD_POST';
// const changeNewPostText = 'changeNewPostText';
const Set_User_Profile = 'Set_User_Profile';
const Set_User_Status = 'Set_User_Status';

const initialState = {
    profile : null,
    postsData : [{
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
    status : ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case ADD_POST:{
            const id = state.postsData.length + 1;
            const newPost = {
                id: id,
                postText: action.newPostText,
                likesCount: 0
            };
            return { ...state, 
                postsData : [...state.postsData, newPost] };
        }

        // case changeNewPostText:
        //     return {...state, newPostText : action.newPostText};
        
        case Set_User_Profile:
            return { ...state, profile : action.profile }

        case Set_User_Status:
            return { ...state, status : action.status }
            
        default:
            return state;
    }
};

const actionCreateAddPost = (newPostText) => ({
    type: ADD_POST,
    newPostText
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

const addPost = (newPostText) => (dispatch) => {
    dispatch(actionCreateAddPost(newPostText));
};

const getUserProfile = (userId) => (dispatch) => {  // Thunk creator
    userProfileAPI.getUserProfile(userId)
        .then((profile) => {
            dispatch(setUserProfile(profile));
        })
};

const getUserStatus = (userId) => (dispatch) => {
    userProfileAPI.getUserStatus(userId)
        .then((status) => {
            dispatch(setUserStatus(status));
        })
};

const updateUserStatus = (status) => (dispatch) => {
    userProfileAPI.updateUserStatus(status)
        .then((response) => {
            if (response.resultCode === 0) {dispatch(setUserStatus(status))}
            else console.log(`somesing wrong, status didn't change. response -  ${JSON.stringify(response)}`);
        })
}

export { addPost, getUserProfile, getUserStatus, updateUserStatus };
export default profileReducer;