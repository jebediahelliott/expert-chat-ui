import React, { Component } from 'react';
import ChatTab from '../components/ChatTab';

class ChatWindow extends Component {
  constrtuctor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <ChatTab active={true} />
        <MessageBar />

      </div>
    )
  }

}
