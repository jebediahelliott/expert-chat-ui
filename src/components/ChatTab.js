import React, { Component } from 'react';

class ChatTab extends Component {

  render() {
    return (
      <div>
        <img source="#" alt="Student Thumbnail">
        <p><b>Student Name</b> <span>Curriculum Track</span> Time Elapsed</p>
        <p>Lesson Name</p>
        <p>Initial Message</p>
        {this.props.active ? <p>Notes   Questions Asked</p> : null}
      </div>
    )
  }
}

export default ChatTab;
