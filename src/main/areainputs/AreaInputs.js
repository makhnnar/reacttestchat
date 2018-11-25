import React, { Component } from 'react';
import './AreaInputs.css';

class AreaInputs extends Component {
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
