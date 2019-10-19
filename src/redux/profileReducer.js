import {usersAPI} from './../api/api';

const addPost = 'addPost';
const changeNewPostText = 'changeNewPostText';
const Set_User_Profile = 'Set_User_Profile';

const initialState = {
    profile : null,
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
    newPostText: ''
};

const profileReducer = (state = initialState, action) => {
    switch (action.type) {

        case addPost:{
            let id = state.postsData.length + 1;
            let newPost = {
                id: id,
                postText: state.newPostText,
                likesCount: 0
            };
            return {...state, 
                postsData : [...state.postsData, newPost], 
                newPostText : ''};
        }

        case changeNewPostText:
            return {...state, newPostText : action.newPostText};
        
        case Set_User_Profile:
            return { ...state, profile : action.profile }
            
        default:
            return state;
    }
};

const actionCreateAddPost = () => ({
    type: addPost
});

const actionCreateChangeNewPostText = (newPostText) => ({
    type: changeNewPostText,
    newPostText: newPostText
});

const setUserProfile = (profile) => ({
    type: Set_User_Profile,
    profile
});

const getUserProfile = (userId) => (dispatch) => {  // Thunk creator
    usersAPI.setUserProfile(userId)
    .then((profile) => {
        dispatch(setUserProfile(profile));
    })
};

export { actionCreateAddPost, actionCreateChangeNewPostText, getUserProfile };
export default profileReducer;