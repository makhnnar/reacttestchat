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

            <div className="AppContent">

              <div className="ChatArea">
                <AreaChat socket={this.state.socket}/>
              </div>

              <div className="InputArea">
                <AreaInputs socket={this.state.socket}/>
              </div>
              
            </div>

          }
          
      </div>
    );
  }
}

export default Main;
