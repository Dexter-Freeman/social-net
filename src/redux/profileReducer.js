const addPost = 'addPost';
const changeNewPostText = 'changeNewPostText';

const initialState = {
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
            let stateCopy = {...state};
            stateCopy.postsData = [...state.postsData];
            let id = stateCopy.postsData.length + 1;
            let newPost = {
                id: id,
                postText: stateCopy.newPostText,
                likesCount: 0
            };
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = '';
            return stateCopy;
        }
        case changeNewPostText:{
            let stateCopy = {...state};
            stateCopy.newPostText = action.newPostText;
            return stateCopy;
        }
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

export {
    actionCreateAddPost,
    actionCreateChangeNewPostText
};
export default profileReducer;