import React, { useState } from "react";
import { useParams } from "react-router-dom";

import { IconButton } from "@material-ui/core";
import InsertEmoticonIcon from "@material-ui/icons/InsertEmoticon";
import AttachFileIcon from "@material-ui/icons/AttachFile";
import MicIcon from "@material-ui/icons/Mic";
import db from "../firebase";
import { useContextValue } from "../Context";

function ChatFooter() {
  const [textInput, setTextInput] = useState("");
  const { roomId } = useParams();
  const [{ user }, dispatch] = useContextValue();

  const changeInputHandler = (e) => {
    setTextInput(e.target.value);
  };

  const submitInputHandler = (e) => {
    e.preventDefault();

    if (textInput) {
      db.collection("rooms").doc(roomId).collection("messages").add({
        message: textInput,
        name: user.displayName,
        timestamp: new Date(),
      });
    }

    setTextInput("");
  };

  return (
    <div className="chat-footer">
      <IconButton size="small" className={"MyCustomButton"}>
        <InsertEmoticonIcon fontSize="small" />
      </IconButton>
      <IconButton size="small" className={"MyCustomButton"}>
        <AttachFileIcon fontSize="small" />
      </IconButton>
      <form className="footer-form" onSubmit={submitInputHandler}>
        <input
          className="footer-input"
          type="text"
          placeholder="Type a message"
          value={textInput}
          onChange={changeInputHandler}
        />
        <button className="footer-btn" type="submit">
          Submit
        </button>
      </form>
      <IconButton size="small" className={"MyCustomButton"}>
        <MicIcon fontSize="small" />
      </IconButton>
    </div>
  );
}

export default ChatFooter;
