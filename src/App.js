import React from 'react';
import './App.css';
import Background from './Components/paper'
import Viewchat from './Components/ChatWindow'
import './App.css'
import {createStore} from 'redux'
import {Provider} from 'react-redux'
import Reducer from './Reducers/index'

function App() {
  return (
    <Provider store={createStore(Reducer)}>
      <div className="App">
        <Background>
          <Viewchat/>
        </Background>
      </div>
    </Provider>
  );
}

export default App;
