const sendMessage = 'sendMessage';
const changeNewMessageText = 'changeNewMessageText';

const initialState = {
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
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {
        case sendMessage:{
            let stateCopy = {...state};
            stateCopy.messagesData = [...state.messagesData];
            let id = stateCopy.messagesData.length + 1;
            let newMessage = {
                id: id,
                messageText: stateCopy.newMessageText
            };
            stateCopy.messagesData.push(newMessage);
            stateCopy.newMessageText = '';
            return stateCopy;
        }
        case changeNewMessageText:{
            let stateCopy = {...state};
            stateCopy.newMessageText = action.newMessageText;
            return stateCopy;
        }
        default:
            return state;
    }
};

const actionCreateSendMessage = () => ({
    type: sendMessage
});

const actionCreateChangeNewMessageText = (newMessageText) => ({
    type: changeNewMessageText,
    newMessageText: newMessageText
});

export {
    actionCreateSendMessage,
    actionCreateChangeNewMessageText
};
export default dialogsReducer;