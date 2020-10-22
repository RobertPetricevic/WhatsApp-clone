import React from "react";

import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function ChatHeader() {
  return (
    <div className="chat-header">
      <div className="room-info">
        <Avatar />
        <p className="room-name">Room</p>
      </div>
      <div className="room-icons">
        <IconButton size="small" className={"MyCustomButton"}>
          <SearchIcon fontSize="medium" />
        </IconButton>
        <IconButton size="small" className={"MyCustomButton"}>
          <MoreVertIcon fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatHeader;
