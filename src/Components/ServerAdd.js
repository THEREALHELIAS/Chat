import React, {Component} from 'react'
import './Components.css'
import { connect } from 'react-redux';
import {ADDRoom} from '../Actions'

class AddRoom extends Component{
    constructor(props){
        super(props);
        this.state = {
            rooms:''
        };
        this.handleChange=this.handleChange.bind(this);
        this.handleSubmit=this.handleSubmit.bind(this);
        
    }
    handleChange(event) {
        this.setState({ rooms: event.target.value });
      }
    
      handleSubmit(event) {
        event.preventDefault();
        console.log(this.states)
        this.props.ADDRoom({
          room: this.state.rooms
        });
        console.log('---------');
        console.log(this.state.rooms);

        this.setState({ rooms: "" });
      }
    
    render(){
        return(
            <div className='add-room'>
                <form onSubmit={this.handleSubmit}>
                    <input value={this.state.rooms} onChange={this.handleChange} />
                    <button type="submit">Channel Name</button>
                </form>    
            </div>
        )
    }
}

export default connect(null, {ADDRoom})(AddRoom)