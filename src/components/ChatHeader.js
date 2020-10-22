import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function ChatHeader(props) {
  const [avatar, setAvatar] = useState("");

  const { name } = props;

  const AVATAR_URL = `https://avatars.dicebear.com/api/human/${avatar}.svg`;

  useEffect(() => {
    setAvatar(Math.floor(Math.random() * 5000));
  }, [name]);

  return (
    <div className="chat-header">
      <div className="room-info">
        <Avatar src={AVATAR_URL} />
        <p className="room-name">{name}</p>
      </div>
      <div className="room-icons">
        <IconButton size="small" className={"MyCustomButton"}>
          <SearchIcon fontSize="small" />
        </IconButton>
        <IconButton size="small" className={"MyCustomButton"}>
          <MoreVertIcon fontSize="small" />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
