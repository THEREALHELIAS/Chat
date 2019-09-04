import React, {Component} from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Components.css';
import { connect } from 'react-redux';
import { NewMessage } from '../Actions'
// import Cable from 'actioncable'

class chatbox extends Component{

    render(){
        return(
            <div className='chat-box'>
                <TextField
                    id="standard-name"
                    label="Message"
                    className='chat-field'
                    margin="normal"
                    // onChange={this.handleChange}
                    // value={this.state.messages}
                    // onKeyPress={ (e) => this.handleChatInputKeyPress(e) }
                />
                <Button variant="contained" color="primary" className='btn-send' onClick={(e) => this.handleSendEvent}>
                    send
                </Button>

            </div>
        )
    }
}

export default connect(null, {NewMessage})(chatbox)