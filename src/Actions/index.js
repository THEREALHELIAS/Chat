import types from '../Constants/ActionTypes';

let nextMessageId = 0
let RoomId = 0

export const NewMessage = (msg, user) =>({
    type: types.newMessage,
    id: nextMessageId++,
    msg,
    user
})
export const ReceiveMessage = (msg, user) =>({
    type: types.receiveMessage,
    id: nextMessageId++,
    msg,
    user
})
export const CreateRoom = RoomName => ({
    type: types.createRoom,
    id: RoomId++,
    RoomName
})