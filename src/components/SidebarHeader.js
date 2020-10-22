import React from "react";

import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";

function SidebarHeader() {
  return (
    <div className="sidebar-header">
      <div className="sidebar-header-top">
        <Avatar />
        <div className="icons-box">
          <IconButton size="small" className={"MyCustomButton"}>
            <DonutLargeIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" className={"MyCustomButton"}>
            <ChatIcon fontSize="small" />
          </IconButton>
          <IconButton size="small" className={"MyCustomButton"}>
            <MoreVertIcon fontSize="small" />
          </IconButton>
        </div>
      </div>
      <div className="sidebar-header-bottom">
        <div className="sidebar-header-input">
          <IconButton size="small" className={"MyCustomButton"}>
            <SearchIcon fontSize="small" />
          </IconButton>
          <input type="text" placeholder="Start new chat" />
        </div>
      </div>
    </div>
  );
}

export default SidebarHeader;
