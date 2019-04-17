import React, { Component } from 'react';
import './App.css';
import Sidebar from './Sidebar';
import ChatWindow from './ChatWindow';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Sidebar />
        <ChatWindow />
      </div>
    );
  }
}

export default App;
