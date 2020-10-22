import React from "react";

import { IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";

function ChatFooter() {
  return (
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
  );
}

export default ChatFooter;
