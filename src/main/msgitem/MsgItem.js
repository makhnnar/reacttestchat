import React, { Component } from 'react';
import './MsgItem.css';

class MsgItem extends Component {
  
  render() {
    const { senderMsg,timeMsg,contentMsg,bgColor } = this.props;
    return (
      <div 
        className="Container" 
        style={{
          backgroundColor:bgColor
        }}
      >
        <div className="Sender">
          <p className="SenderMsg">{senderMsg}.</p>
          <p className="TimeMsg">{timeMsg}</p>
        </div>
        <p className="ContentMsg">{contentMsg}</p>
      </div>
    );
  }

}

export default MsgItem;
