import React, { Component } from 'react';
import './AreaChat.css';

import MsgItem from '../msgitem/MsgItem';

class AreaChat extends Component {

  constructor(props){
    super(props);
    this.state = {
      msgs:[{
        name:'Pedro',
        time:'10:20',
        msg:'Este es un mensaje de Pedro'
      },
      {
        name:'Ari',
        time:'10:21',
        msg:'Este es un mensaje de Ari'
      },
      {
        name:'Ari',
        time:'10:22',
        msg:'Este es otro mensaje de Ari'
      },]
    };
  }

  componentDidMount(){
    this.props.socket.on('enviarCliente', function(msg){
        console.log('RECIBIENDO: '+JSON.stringify(msg));
    });
  }

  render() {
    return (
      <div className="ContainerAreaChat">
        <div className="scroller">
            {this.state.msgs.map(({ name, time, msg }) => {
              return (
                  <div className="item">
                    <MsgItem 
                      senderMsg={name}
                      timeMsg={time}
                      contentMsg={msg}
                      bgColor={'#90caf9'}
                    />
                  </div>
              );
            })}
          </div>
      </div>
    );
  }
}

export default AreaChat;
