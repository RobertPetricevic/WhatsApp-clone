import React, { useRef, useEffect } from "react";

import MessageBox from "../components/MessageBox";

function ChatBody(props) {
  const scrollDiv = useRef(null);

  useEffect(() => {
    scrollDiv.current.scrollIntoView({ behavior: "smooth" });
  }, [props.messages]);

  const displayedMessages = props.messages.map((message) => (
    <MessageBox
      key={message.timestamp}
      name={message.name}
      message={message.message}
      timestamp={message.timestamp}
    />
  ));

  return (
    <div className="chat-body">
      {displayedMessages}
      <div ref={scrollDiv} />
    </div>
  );
}

export default ChatBody;
