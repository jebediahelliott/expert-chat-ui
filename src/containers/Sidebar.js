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
      <div>
        <p>Requires Action</p>
        {this.renderTabs(this.state.requiresAction)}
        <p>Active Questions</p>
        {this.renderTabs(this.state.active)}
        <p>Inactive Questions</p>
        {this.renderTabs(this.state.inactive)}
        <p>Recently Resolved</p>
        {this.renderTabs(this.state.resolved)}
      </div>
    );
  }


}
