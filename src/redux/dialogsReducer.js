const sendMessage = 'sendMessage';
const changeNewMessageText = 'changeNewMessageText';

const dialogsReducer = (dialogsPage, action) => {
    switch (action.type) {
        case sendMessage:
            let id = dialogsPage.messagesData.length + 1;
            let newMessage = {
                id: id,
                messageText: dialogsPage.newMessageText
            }
            dialogsPage.messagesData.push(newMessage);
            dialogsPage.newMessageText = '';
            return dialogsPage;
        case changeNewMessageText:
            dialogsPage.newMessageText = action.newMessageText;
            return dialogsPage;
        default:
            return dialogsPage;
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