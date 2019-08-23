import React from 'react'
import './Components.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

export default function Roomview(){
    return(
        <div className='viewroom'>
            <List>
                {
                    ['Mainpage'].map(topic => (
                        <ListItem key={topic} button>
                            <ListItemText primary={topic}/>
                        </ListItem>
                    ))
                }
            </List>

            
        </div>
    )
}