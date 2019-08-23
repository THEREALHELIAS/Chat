import * as types from '../Constants/ActionTypes';

export default function NewRoom(state, action){
    switch(action.type){
        case types.Add_Room:
            return state.concat({
                type: action.RoomName,
                id: action.Id
            })
        case types.Room_View:
            return state.user
        default:
            return state
    }
}