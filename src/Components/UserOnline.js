import React from 'react'
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import './Components.css'

export default function Chatview(){
    return(
        <div className='viewuser'>
            hoping for online user to see
            <Grid container justify="left" alignItems="left" className='avatar'>
                <Avatar/><p>hi</p>
            </Grid>
        </div>
    )
}