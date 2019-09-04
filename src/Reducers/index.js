import { combineReducers } from 'redux';
import MSG from './Messages'
import NR from './NewRoom'

const chat = combineReducers ({
    Messages: MSG,
    Channels: NR
})
export default chat