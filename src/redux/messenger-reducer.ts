const defaultAvatar = require("../assets/images/default-avatar.png");

const ADD_MESSAGE = "messenger-reducer/ADD_MESSAGE";

type DialogType = {
    id: number
    avatar: string
    fullName: string
    lastMessage: string
    lastMessageSendTime: string
}

type MessageType = {
    id: number
    isInput?: boolean
    text: string
}

const initialState = {
    messages: [
        {id: 1, isInput: true, text: "Welcome"},
        {id: 2, text: "Hello"},
        {id: 3, isInput: true, text: "Enter new message"},
    ] as Array<MessageType>,

    dialogs: [
        {id: 1, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "7:55 PM"},
        {id: 2, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "3:22 PM"},
        {id: 3, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "2:14 PM"},
        {id: 4, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:27 PM"},
        {id: 5, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "1:18 PM"},
        {id: 6, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "yesterday"},
        {id: 7, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "yesterday"},
        {id: 8, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "2 days ago"},
        {id: 9, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "4 days ago"},
        {id: 10, avatar: defaultAvatar, fullName: "John Doe", lastMessage: "any message", lastMessageSendTime: "a week ago"},
    ] as Array<DialogType>,
};

export type InitialStateType = typeof initialState;

const messengerReducer = (state = initialState, action: any): InitialStateType => {
    switch (action.type) {
        case ADD_MESSAGE:
            return {
                ...state,
                messages: [
                    ...state.messages,
                    {
                        id: state.messages.length + 1,
                        text: action.message
                    }
                ]
            };

        default:
            return state;
    }
};


export default messengerReducer;


// action creators

type AddMessageActionType = {
    type: typeof ADD_MESSAGE
    message: string
}

export const addMessageCreator = (message: string): AddMessageActionType => ({type: ADD_MESSAGE, message});