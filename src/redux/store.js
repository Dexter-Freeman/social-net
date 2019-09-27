import profileReducer from './profileReducer';
import dialogsReducer from './dialogsReducer';
import navbarReducer from './navbarReducer';

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

    dispatch(action) {
        this._state.profilePage = profileReducer(this._state.profilePage, action);
        this._state.dialogsPage = dialogsReducer(this._state.dialogsPage, action);
        this._state.navbarFriends = navbarReducer(this._state.navbarFriends, action);
        this._subscriber(this._state);  
    }
}

export default store;