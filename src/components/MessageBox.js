import React from "react";

function MessageBox(props) {
  return (
    <div className={`message-box ${props.receiver && "message-box-receiver"}`}>
      <p className="message-sender">{props.name}</p>
      <div className="message-body">
        <p className="message-text">{props.message}</p>
        <p className="message-timestamp">
          {new Date(props.timestamp.toDate()).toUTCString()}
        </p>
      </div>
    </div>
  );
}

export default MessageBox;
