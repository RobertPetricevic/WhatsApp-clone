import React from "react";

import ChatHeader from "../components/ChatHeader";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";

function ChatScreen() {
  const AVATAR_URL = `https://avatars.dicebear.com/api/human/${""}.svg`;

  if (false) {
    return <div className="no-chat">Click on chat in sidebar</div>;
  }

  return (
    <div className="chat-screen">
      <ChatHeader />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}

export default ChatScreen;
