import React, { Component } from 'react';
import './AreaInputs.css';

class AreaInputs extends Component {


  enviar = (textoMsg) =>{
    this.props.socket.emit('enviarServer',textoMsg);
  }

  render() {
    return (
      <div className="ContainerInputs">
        <input className="Msg"/>
        <button className="Send">Enviar</button>
      </div>
    );
  }

}

export default AreaInputs;
