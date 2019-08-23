import React from 'react'
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import './Components.css';

export default function chatbox(){

    //const [textValue, changeTextValue] = React.useState('');
    return(
        <div className='chat-box'>
            <TextField
                id="standard-name"
                label="Message"
                className='chat-field'
                margin="normal"
                //value={textValue}
                //onChange={ e => changeTextValue(e.target.value)}
            />
            <Button variant="contained" color="primary" className='btn-send' type='submit'>
                send
            </Button>

        </div>
    )
}