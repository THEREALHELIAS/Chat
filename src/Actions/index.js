import {
    ADD_MESSAGE,
    ADD_ROOM,
    MESSAGE_RECEIVE,
    ROOM_VIEW
} from '../Constants/ActionTypes';
import axios from 'axios';

let nextMessageId = 0

export const NewMessage = (msg, user) =>({
    type: ADD_MESSAGE,
    payload : {id: nextMessageId++, msg, user}
})
export const ReceiveMessage = (msg, user) =>({  
    type: MESSAGE_RECEIVE,
    payload: {id: nextMessageId++, msg, user}
})
export const CreateRoom = RoomName => ({
    type: ADD_ROOM,
    payload: {room: RoomName}
})
export const ViewRoom = RoomName => ({
    type: ROOM_VIEW,
    payload: {room: RoomName}
})


export function DisplayRoom(){
    return(dispatch)=> {
            return axios.get('http://37c624bb.ngrok.io/conversations').then((Response)=>{
            dispatch(ViewRoom(Response.data))
        })
    }
}

export function ADDRoom(room){
    return(dispatch)=> {
        return axios.post('http://37c624bb.ngrok.io/conversations', room).then((Response)=>{
            console.log('response', Response.data)
            dispatch(CreateRoom(Response.data))
        })
    }
}
// this.props.addRoom.map((rooms) => {
//     rooms.room.map(data => {
      
//     })
//  })

//  this.props.addRoom.map((NewRoom, i) => (
                            
//     <ListItem key={i} button>
//         <ListItemText primary={NewRoom.addRoom.room}/>
//     </ListItem>
// ))