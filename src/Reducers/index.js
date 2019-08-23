import { combineReducers } from 'redux';
import MSG from './Messages'
import NR from './NewRoom'

const chat = combineReducers ({
    MSG,
    NR,
})
export default chat