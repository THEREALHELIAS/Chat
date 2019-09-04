import {
    ADD_ROOM,
    ROOM_VIEW,
} from '../Constants/ActionTypes';
 let init_state = {
    rooms: []
};

export default function NewRoom(state=init_state, action){
    switch(action.type){
        case ADD_ROOM:
            console.log('reducer add_room', action.payload)
            return {...state, 
                     rooms: state.rooms.concat(action.payload.room)}
                     
        case ROOM_VIEW:
            return {
                ...state,
                rooms: action.payload.room
            }
        default:
            return {
                ...state

            }
    }
}