const postsData = [
    {id : 1, postText : "First post", likesCount : 5},
    {id : 2, postText : "Second post", likesCount : 3},
    {id : 3, postText : "some text", likesCount : 25},
    {id : 4, postText : "more some text", likesCount : 1}
  ];

const dialogsData = [
    {id : 1, name : 'User 1'},
    {id : 2, name : 'User 2'},
    {id : 3, name : 'User 3'},
    {id : 4, name : 'User 4'},
    {id : 5, name : 'User 5'},
    {id : 6, name : 'User 6'},
    {id : 7, name : 'User 7'}
];

const messagesData = [
    {id : 1, messageText : "Hello! How are you?"},
    {id : 1, messageText : "I'm develope my own social network"},
    {id : 1, messageText : "Wow! It's amazing!"},
    {id : 1, messageText : "Yes!"}
];

const Data = {
    postsData : postsData,
    dialogsData : dialogsData,
    messagesData : messagesData
}

export default Data;
export { postsData, dialogsData, messagesData };