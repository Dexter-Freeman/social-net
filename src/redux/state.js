const addPost = 'addPost';
const changeNewPostText = 'changeNewPostText';
const sendMessage = 'sendMessage';
const changeNewMessageText = 'changeNewMessageText';
const actionCreateAddPost = () => ({
    type: addPost
});
const actionCreateChangeNewPostText = (newPostText) => ({
    type: changeNewPostText,
    newPostText: newPostText
});
const actionCreateSendMessage = () => ({
    type: sendMessage
});
const actionCreateChangeNewMessageText = (newMessageText) => ({
    type: changeNewMessageText,
    newMessageText: newMessageText
});

let store = {

    _state: {
        profilePage: {
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
        },
        dialogsPage: {
            messagesData: [{
                    id: 1,
                    messageText: "Hello! How are you?"
                },
                {
                    id: 2,
                    messageText: "I'm develope my own social network"
                },
                {
                    id: 3,
                    messageText: "Wow! It's amazing!"
                },
                {
                    id: 4,
                    messageText: "Yes!"
                }
            ],
            dialogsData: [{
                    id: 1,
                    name: 'User 1',
                    avaUrl: 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'
                },
                {
                    id: 2,
                    name: 'User 2',
                    avaUrl: 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'
                },
                {
                    id: 3,
                    name: 'User 3',
                    avaUrl: 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'
                },
                {
                    id: 4,
                    name: 'User 4',
                    avaUrl: 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'
                },
                {
                    id: 5,
                    name: 'User 5',
                    avaUrl: 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'
                },
                {
                    id: 6,
                    name: 'User 6',
                    avaUrl: 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'
                },
                {
                    id: 7,
                    name: 'User 7',
                    avaUrl: 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'
                }
            ],
            newMessageText: ''
        },
        navbarFriends: {
            navbarFriends: [{
                    id: 1,
                    name: 'Friend 1',
                    avaUrl: 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'
                },
                {
                    id: 2,
                    name: 'Friend 2',
                    avaUrl: 'http://www.alluserpics.com/data/thumbnails/17/03172.jpg'
                },
                {
                    id: 3,
                    name: 'Friend 3',
                    avaUrl: 'http://www.alluserpics.com/data/thumbnails/17/03102.jpg'
                }
            ]
        }
    },

    _subscriber() {
        
    },

    subscribe(observer) {
        this._subscriber = observer;
    },

    getState() {
        return this._state;
    },

    changeNewPostText(text) {

    },

    changeNewMessageText(text) {

    },

    sendMessage() {

    },

    dispatch(action) {
        if (action.type === addPost) {
            let id = this._state.profilePage.postsData.length + 1;
            let newPost = {
                id: id,
                postText: this._state.profilePage.newPostText,
                likesCount: 0
            };
            this._state.profilePage.postsData.push(newPost);
            this._state.profilePage.newPostText = '';
            this._subscriber(this._state);
        } else if (action.type === changeNewPostText) {
            this._state.profilePage.newPostText = action.newPostText;
            this._subscriber(this._state);
        } else if (action.type === sendMessage) {
            let id = this._state.dialogsPage.messagesData.length + 1;
            let newMessage = {
                id: id,
                messageText: this._state.dialogsPage.newMessageText
            }
            this._state.dialogsPage.messagesData.push(newMessage);
            this._state.dialogsPage.newMessageText = '';
            this._subscriber(this._state);
        } else if (action.type === changeNewMessageText) {
            this._state.dialogsPage.newMessageText = action.newMessageText;
            this._subscriber(this._state);
        }
    }
}

export default store;
export {
    actionCreateAddPost,
    actionCreateChangeNewPostText,
    actionCreateSendMessage,
    actionCreateChangeNewMessageText
};