import React from 'react'
import Chip from '@material-ui/core/Chip';
import Typography from '@material-ui/core/Typography';
import './Components.css'

export default function Chatview(){
    return(
        <div className='viewchat'>
                {
                    [{from: 'user', msg: 'hello'}].map((chat, i) => (
                        <div className='Input' key={i}>
                            <Chip label={chat.from} className='chip'  />
                            <Typography variant='h6' className='msg-txt'>
                                {chat.msg}
                            </Typography>
                        </div>
                    ))
                }
        </div>
    )
}