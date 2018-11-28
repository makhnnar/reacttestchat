import React, { Component } from 'react';
import './AreaChat.css';

import MsgItem from '../msgitem/MsgItem';

class AreaChat extends Component {

  constructor(props){
    super(props);
    this.state = {
      msgs:[
        {
          id:'1',
          name:'Pedro',
          time:'10:20',
          msg:'Este es un mensaje de Pedro para Ari'
        },
        {
          id:'2',
          name:'Ari',
          time:'10:21',
          msg:'Este es un mensaje de Ari muy largo, para probar la responsividad del componente, a la hora de adaptarse a tamaños variables, segun la longitud de los caracteres presentes en el contenido a mostrar'
        },
        {
          id:'1',
          name:'Pedro',
          time:'10:22',
          msg:'Este es otro mensaje de Pedro'
        },
        {
          id:'2',
          name:'Ari',
          time:'10:22',
          msg:'Este es otro mensaje de Ari'
        },
        {
          id:'2',
          name:'Ari',
          time:'10:22',
          msg:'Este es otro mensaje de Ari'
        }
      ]
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
            {this.state.msgs.map(({ id,name, time, msg }) => {
              return (
                  <div className="item">
                    {id==='1'&&
                      <MsgItem 
                        senderMsg={name}
                        timeMsg={time}
                        contentMsg={msg}
                        bgColor={'#90caf9'}
                      />
                    }
                    {id!=='1'&&
                      <MsgItem 
                        senderMsg={name}
                        timeMsg={time}
                        contentMsg={msg}
                        bgColor={'#ce93d8'}
                      />
                    }
                  </div>
              );
            })}
          </div>
      </div>
    );
  }
}

export default AreaChat;
