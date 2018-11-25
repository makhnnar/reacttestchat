import React, { Component } from 'react';
import './Main.css';

import io from 'socket.io-client';

import MsgItem from './msgitem/MsgItem';
import AreaInputs from './areainputs/AreaInputs';

class Main extends Component {

  constructor(props) {
    super(props);
    this.state = {
      socket: null,
      dataMsg:[
        {
          name:'Pedro',
          msg:'Este es un mensaje de Pedro'
        },
        {
          name:'Ari',
          msg:'Este es un mensaje de Ari'
        },
        {
          name:'Ari',
          msg:'Este es otro mensaje de Ari'
        },
      ]
    };
  }

  componentDidMount(){
    this.state.socket = io('http://localhost:3000');
    this.state.socket.on('enviarCliente', function(msg){
        console.log('RECIBIENDO: '+JSON.stringify(msg));
    });
  }

  enviar = (textoMsg) =>{
    this.state.socket.emit('enviarServer',textoMsg);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <MsgItem 
            senderMsg={this.state.dataMsg[0].name}
            timeMsg={'10:20'}
            contentMsg={this.state.dataMsg[0].msg}
            bgColor={'#90caf9'}
          />
          <MsgItem 
            senderMsg={this.state.dataMsg[1].name}
            timeMsg={'10:22'}
            contentMsg={this.state.dataMsg[1].msg}
            bgColor={'#f48fb1'}
          />
          <MsgItem 
            senderMsg={this.state.dataMsg[2].name}
            timeMsg={'10:24'}
            contentMsg={this.state.dataMsg[2].msg}
            bgColor={'#f48fb1'}
          />
          <AreaInputs/>
        </header>
      </div>
    );
  }
}

export default Main;
