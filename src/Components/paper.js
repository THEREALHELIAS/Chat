import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import './Components.css'
import ViewChat from './ChatWindow'
import ViewRoom from './ServerWindow'
import BoxChat from './Chatbox'
import Userview from './UserOnline'
import { connect } from 'react-redux';

class PaperSheet extends Component{
  render(){
    console.log(this.props)
    return (
      
      <div>
        <Paper className='root'>
          <div className='title'>
            <Typography variant="h4" component="h3" className='title-main'>
              Chat Application
            </Typography>
            <Typography variant="h5" component="h2" className='topic-title'>
              Topic
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
}

const mapStateToProps = (state) => {
  console.log(state)

  return {
          Messages: state.msg, 
          Servers: state.newRoom
        }
}

export default connect(mapStateToProps)(PaperSheet)