import React from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Components.css'
import ViewChat from './ChatWindow'
import ViewRoom from './ServerWindow'
import BoxChat from './Chatbox'
import Userview from './UserOnline'

export default function PaperSheet() {

  return (
    <div>
      <Paper className='root'>
        <div className='title'>
          <Typography variant="h5" component="h3" className='title-main'>
            Chat Application
          </Typography>
        </div>
        <div className='ChatContent'>
             <ViewRoom/>
             <ViewChat/>
             <Userview/> 
        </div>
        <div className='Chatcontent'>
             <BoxChat/>
        </div>
      </Paper>
    </div>
  );
}