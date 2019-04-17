import React, { Component } from 'react';
import ChatTab from '../components/ChatTab';

class Sidebar extends Component {
  constrtuctor(props) {
    super(props)
    this.state = {
      requiresAction: [],
      active: [],
      inactive: [],
      resolved: []
    }
  }

  renderTabs = (chats) => {
    chats.map(chat => <ChatTab chat={chat} />)
  }

  render() {
    return (
      
    )
  }


}
