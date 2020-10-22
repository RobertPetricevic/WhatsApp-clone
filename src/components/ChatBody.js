import React from "react";

import MessageBox from "../components/MessageBox";

function ChatBody() {
  return (
    <div className="chat-body">
      <MessageBox message="Bla bla bla bla bla bla bla bla bla bla" receiver />
      <MessageBox message="Blbla bla" />
      <MessageBox message="Bla a bla bla bla bla bla" receiver />
    </div>
  );
}

export default ChatBody;
