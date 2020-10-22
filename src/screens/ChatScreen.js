import React from "react";

import { Avatar, IconButton } from "@material-ui/core";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import SearchIcon from "@material-ui/icons/Search";
import MessageBox from "../components/MessageBox";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";

function ChatScreen() {
  if (false) {
    return <div className="no-chat">Click on chat in sidebar</div>;
  }
  return (
    <div className="chat-screen">
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
      <div className="chat-body">
        <MessageBox
          message="Bla bla bla bla bla bla bla bla bla bla"
          receiver
        />
        <MessageBox message="Blbla bla" />
        <MessageBox message="Bla a bla bla bla bla bla" receiver />
      </div>
      <div className="chat-footer">
        <IconButton size="small" className={"MyCustomButton"}>
          <InsertEmoticonIcon fontSize="medium" />
        </IconButton>
        <IconButton size="small" className={"MyCustomButton"}>
          <AttachFileIcon fontSize="medium" />
        </IconButton>
        <form className="footer-form">
          <textarea
            className="footer-input"
            type="text"
            placeholder="Type a message"
          />
          <button className="footer-btn" type="submit">
            Submit
          </button>
        </form>
        <IconButton size="small" className={"MyCustomButton"}>
          <MicIcon fontSize="medium" />
        </IconButton>
      </div>
    </div>
  );
}

export default ChatScreen;
