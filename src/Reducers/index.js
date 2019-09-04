import { combineReducers } from 'redux';
import MSG from './Messages'
import NR from './NewRoom'

const chat = combineReducers ({
    Messages: MSG,
    AddingRoom: NR
})
export default chat