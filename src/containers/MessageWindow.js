import React, { Component } from 'react';
import Message from '../components/Message'

class MessageWindow extends Component {

  displayMessages = (messages) => {
    messages.map(message => <Message message={message} />)
  }

  render() {
    return (
      <div>
        {this.displayMessages(this.props.messages)}
      </div>
    )
  }
}
