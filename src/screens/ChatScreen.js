import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";

import ChatHeader from "../components/ChatHeader";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";

function ChatScreen() {
  const { roomId } = useParams();

  const [roomName, setRoomName] = useState();

  useEffect(() => {
    const unsubscribe = db
      .collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

    return () => {
      unsubscribe();
    };
  }, [roomId]);

  return (
    <div className="chat-screen">
      <ChatHeader name={roomName} />
      <ChatBody />
      <ChatFooter />
    </div>
  );
}

export default ChatScreen;
