import React, { Component } from 'react';
import ChatTab from '../components/ChatTab';
import MessageBar from '../components/MessageBar';
import MessageWindow from './MessageWindow';

class ChatWindow extends Component {
  constrtuctor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ChatTab active={true} />
        <MessageWindow />
        <MessageBar />
      </div>
    )
  }

}
