import React from "react";

function MessageBox(props) {
  return (
    <div className={`message-box ${props.receiver && "message-box-receiver"}`}>
      <p className="message-sender">Person</p>
      <div className="message-body">
        <p className="message-text">{props.message}</p>
        <p className="message-timestamp">12:07</p>
      </div>
    </div>
  );
}

export default MessageBox;
