import * as types from '../Constants/ActionTypes';

export default function messages(state, action) {
    switch(action.type){
        case types.Add_Message  :
            return{
                
            }
        case types.Message_Receive :
            return{
                
            }
            default:
                return state
    }
}