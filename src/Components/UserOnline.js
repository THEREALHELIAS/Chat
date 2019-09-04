import React from 'react'
import './Components.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux'

function Chatview(){
    return(
        <div className='viewuser'>
            <List>
                {
                    ['user'].map((user, i) => (
                        <ListItem key={i}>
                            <ListItemText primary={user}></ListItemText>
                        </ListItem>
                    ))
                }
            </List>
            
        </div>
    )
}

export default connect()(Chatview)