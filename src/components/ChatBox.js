import React, { useEffect, useState } from "react";

import { Avatar } from "@material-ui/core";

function ChatBox() {
  const [avatar, setAvatar] = useState("");

  const AVATAR_URL = `https://avatars.dicebear.com/api/human/${avatar}.svg`;

  useEffect(() => {
    setAvatar(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="chat-box">
      <div className="avatar">
        <Avatar src={AVATAR_URL} />
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
