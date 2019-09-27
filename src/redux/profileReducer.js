const addPost = 'addPost';
const changeNewPostText = 'changeNewPostText';

const profileReducer = (profilePage, action) => {
    switch (action.type) {
        case addPost:
            let id = profilePage.postsData.length + 1;
            let newPost = {
                id: id,
                postText: profilePage.newPostText,
                likesCount: 0
            };
            profilePage.postsData.push(newPost);
            profilePage.newPostText = '';
            return profilePage;
        case changeNewPostText:
            profilePage.newPostText = action.newPostText;
            return profilePage;
        default:
            return profilePage;
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