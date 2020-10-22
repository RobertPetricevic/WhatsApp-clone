import React from "react";
import { Avatar } from "@material-ui/core";

function ChatBox() {
  return (
    <div className="chat-box">
      <div className="avatar">
        <Avatar />
      </div>
      <div className="chat-box-info">
        <div className="chat-box-left">
          <p className="chat-box-name">Room</p>
          <p className="chat-box-message">Blabla bla bla gggggblabla</p>
        </div>
        <div className="chat-box-right">
          <p className="last-seen">12:07</p>
        </div>
      </div>
    </div>
  );
}

export default ChatBox;
