import React from "react";

import { useContextValue } from "../Context";

function MessageBox(props) {
  const [{ user }, dispatch] = useContextValue();

  return (
    <div
      className={`message-box ${
        user.displayName === props.name && "message-box-receiver"
      }`}
    >
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
