import React from "react";

import MessageBox from "../components/MessageBox";

function ChatBody(props) {
  const displayedMessages = props.messages.map((message) => (
    <MessageBox
      key={message.timestamp}
      name={message.name}
      message={message.message}
      timestamp={message.timestamp}
    />
  ));

  return <div className="chat-body">{displayedMessages}</div>;
}

export default ChatBody;
