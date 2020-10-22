import React, { useEffect, useState } from "react";

import { Avatar } from "@material-ui/core";
import db from "../firebase";

function ChatBox(props) {
  const [avatar, setAvatar] = useState("");

  const AVATAR_URL = `https://avatars.dicebear.com/api/human/${avatar}.svg`;

  const createNewChat = () => {
    const roomName = prompt("Enter name for chat");

    if (roomName) {
      db.collection("rooms").add({
        name: roomName,
      });
    }
  };

  useEffect(() => {
    setAvatar(Math.floor(Math.random() * 5000));
  }, []);

  if (props.addNew) {
    return (
      <div className="chat-box-add-new" onClick={createNewChat}>
        ADD NEW CHAT
      </div>
    );
  }

  return (
    <div className="chat-box">
      <div className="avatar">
        <Avatar src={AVATAR_URL} />
      </div>
      <div className="chat-box-info">
        <div className="chat-box-left">
          <p className="chat-box-name">{props.name}</p>
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
