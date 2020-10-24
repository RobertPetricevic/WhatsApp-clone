import React, { useEffect, useState } from "react";

import { Avatar, IconButton } from "@material-ui/core";
import DonutLargeIcon from "@material-ui/icons/DonutLarge";
import ChatIcon from "@material-ui/icons/Chat";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import { useContextValue } from "../Context";
import { actionTypes } from "../reducer";

function SidebarHeader() {
  const [textInput, setTextInput] = useState("");
  const [avatar, setAvatar] = useState("");
  const [{ user }, dispatch] = useContextValue();

  const AVATAR_URL = `https://avatars.dicebear.com/api/human/${avatar}.svg`;

  const changeInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const searchRooms = (e) => {
    dispatch({
      type: actionTypes.SEARCH_ROOMS,
      searchText: textInput,
    });
    setTextInput("");
  };

  useEffect(() => {
    setAvatar(Math.floor(Math.random() * 5000));
  }, []);

  return (
    <div className="sidebar-header">
      <div className="sidebar-header-top">
        <Avatar src={AVATAR_URL} />
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
          <IconButton
            size="small"
            className={"MyCustomButton"}
            onClick={searchRooms}
          >
            <SearchIcon fontSize="small" />
          </IconButton>
          <input
            type="text"
            placeholder="Search rooms"
            value={textInput}
            onChange={changeInputHandler}
          />
        </div>
      </div>
    </div>
  );
}

export default SidebarHeader;
