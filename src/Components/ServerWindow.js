import React, {Component} from 'react'
import './Components.css'
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { connect } from 'react-redux';
import Addbtn from './ServerAdd';
import {DisplayRoom} from '../Actions';
class Roomview extends Component{
    componentDidMount(){
        this.props.DisplayRoom();
    }
    render(){
        console.log('props', this.props)
        return(
            <div className='viewroom'>
                <List>
                    {
                      this.props.addRoom.map((NewRoom, i) => (
                            
                            <ListItem key={i} button>
                                <ListItemText primary={NewRoom.room}/>
                            </ListItem>
                        ))
                    }
                </List>
                <Addbtn/>
            </div>
            )
        }
    }
const mapStateToProps = state => {
    return {
      addRoom: state.Channels.rooms
    }
  };

export default connect(mapStateToProps, {DisplayRoom})(Roomview)