import {
    ADD_MESSAGE,
    MESSAGE_RECEIVE
} from '../Constants/ActionTypes';
    let init_state = {
        message:[]
    };

export default function messages(state=init_state,action) {
    switch(action.type){
        case ADD_MESSAGE :
                return{ ...state, message: state.message.concat(action.payload)  }
        case MESSAGE_RECEIVE :
                return[...state, action.payload]
            default:
                return state
    }
}