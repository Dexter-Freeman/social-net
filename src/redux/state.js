let rerenderTree = () => {

};

const postsData = [
    {id : 1, postText : "First post", likesCount : 5},
    {id : 2, postText : "Second post", likesCount : 3},
    {id : 3, postText : "some text", likesCount : 25},
    {id : 4, postText : "more some text", likesCount : 1}
  ];

const dialogsData = [
    {id : 1, name : 'User 1', avaUrl : 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'},
    {id : 2, name : 'User 2', avaUrl : 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'},
    {id : 3, name : 'User 3', avaUrl : 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'},
    {id : 4, name : 'User 4', avaUrl : 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'},
    {id : 5, name : 'User 5', avaUrl : 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'},
    {id : 6, name : 'User 6', avaUrl : 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'},
    {id : 7, name : 'User 7', avaUrl : 'http://pikchyriki.net/avatar/prikolnye/100/12.jpg'}
];

const messagesData = [
    {id : 1, messageText : "Hello! How are you?"},
    {id : 2, messageText : "I'm develope my own social network"},
    {id : 3, messageText : "Wow! It's amazing!"},
    {id : 4, messageText : "Yes!"}
];

const navbarFriends = [
    {id : 1, name : 'Friend 1', avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03178.jpg'},
    {id : 2, name : 'Friend 2', avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03172.jpg'},
    {id : 3, name : 'Friend 3', avaUrl : 'http://www.alluserpics.com/data/thumbnails/17/03102.jpg'}
]

const state = {
    profilePage : {
        postsData : postsData,
        newPostText : ''
    },
    dialogsPage: {
        messagesData : messagesData,
        dialogsData : dialogsData,
        newMessageText: ''
    },
    navbarFriends : {
        navbarFriends : navbarFriends
    }    
}

const addPost = () => {
    let id = postsData.length + 1;
    let newPost = {
        id : id,
        postText : state.profilePage.newPostText,
        likesCount : 0
    }
    postsData.push(newPost);
    state.profilePage.newPostText = '';
    rerenderTree(state);
}

const changeNewPostText = (text) => {
    state.profilePage.newPostText = text;
    rerenderTree(state);
}

const sendMessage = () => {
    let id = messagesData.length + 1;
    let newMessage = {
        id : id,
        messageText : state.dialogsPage.newMessageText
    }
    messagesData.push(newMessage);
    state.dialogsPage.newMessageText = '';
    rerenderTree(state);
}

const changeNewMessageText = (text) => {
    state.dialogsPage.newMessageText = text;
    rerenderTree(state);
}

const subscribe = (observer) => {
    rerenderTree = observer;
}

export { addPost, sendMessage, changeNewMessageText, changeNewPostText, subscribe };
export default state;