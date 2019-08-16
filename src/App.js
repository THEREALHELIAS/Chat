import React from 'react';
import './App.css';
import Background from './Components/paper'
import Viewchat from './Components/ChatWindow'
import './App.css'

function App() {
  return (
    <div className="App">
      {/* <p className= 'title-1'>
        Web Chat Application
      </p> */}
      <Background>
        <Viewchat/>
      </Background>

    </div>
  );
}

export default App;
