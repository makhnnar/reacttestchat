import React, { Component } from 'react';
import './Main.css';

import io from 'socket.io-client';

import AreaChat from './areachat/AreaChat';
import AreaInputs from './areainputs/AreaInputs';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      socket: null,
    };
    this.state.socket = io('http://localhost:3000');
  }

  render() {
    return (
      <div className="App">
        
          {this.state.socket&&

            <header className="App-header">

              <AreaChat socket={this.state.socket}/>
              <AreaInputs socket={this.state.socket}/>

            </header>
            
          }
          
      </div>
    );
  }
}

export default Main;
