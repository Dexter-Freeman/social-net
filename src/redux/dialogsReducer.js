const sendMessage = 'sendMessage';
// const changeNewMessageText = 'changeNewMessageText'; // так-как обработка формы теперь осуществляется при помощи redux-form,
                                                        // то и изменения текста до отправки обрабатывает redux-form

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
    ]
};

const dialogsReducer = (state = initialState, action) => {
    switch (action.type) {

        case sendMessage:
            let id = state.messagesData.length + 1;
            let newMessage = {
                id: id,
                messageText: action.newMessageText
            };
            return {...state,
                messagesData : [...state.messagesData, newMessage]};
        
        // case changeNewMessageText:   // так-как обработка формы теперь осуществляется при помощи redux-form,
                                        // то и изменения текста до отправки обрабатывает redux-form
        //     return {...state, newMessageText : action.newMessageText};
        
        default:
            return state;
    }
};

const actionCreateSendMessage = (newMessageText) => ({
    type: sendMessage,
    newMessageText

});

// const actionCreateChangeNewMessageText = (newMessageText) => ({  // так-как обработка формы теперь осуществляется при помощи redux-form,
                                        // то и изменения текста до отправки обрабатывает redux-form
//     type: changeNewMessageText,
//     newMessageText: newMessageText
// });

export {
    actionCreateSendMessage
};
export default dialogsReducer;