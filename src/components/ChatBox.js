import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import { Avatar } from "@material-ui/core";
import db from "../firebase";

function ChatBox(props) {
  const [avatar, setAvatar] = useState("");
  const [messages, setMessages] = useState([]);
  console.log("messages:", messages);

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

  useEffect(() => {
    if (!props.addNew) {
      db.collection("rooms")
        .doc(props.id)
        .collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          setMessages(snapshot.docs.map((doc) => doc.data()))
        );
    }
  }, [props.id]);

  if (props.addNew) {
    return (
      <div className="chat-box-add-new" onClick={createNewChat}>
        ADD NEW CHAT
      </div>
    );
  }

  return (
    <Link to={`/${props.id}`}>
      <div className="chat-box">
        <div className="avatar">
          <Avatar src={AVATAR_URL} />
        </div>
        <div className="chat-box-info">
          <p className="chat-box-name">{props.name}</p>
          <p className="chat-box-message">{messages[0]?.message}</p>
        </div>
      </div>
    </Link>
  );
}

export default ChatBox;
