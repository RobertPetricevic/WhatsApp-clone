import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import db from "../firebase";

import ChatHeader from "../components/ChatHeader";
import ChatBody from "../components/ChatBody";
import ChatFooter from "../components/ChatFooter";

function ChatScreen() {
  const { roomId } = useParams();

  const [roomName, setRoomName] = useState();
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const unsubscribeRooms = db
      .collection("rooms")
      .doc(roomId)
      .onSnapshot((snapshot) => setRoomName(snapshot.data().name));

    const unsubscribeMesssages = db
      .collection("rooms")
      .doc(roomId)
      .collection("messages")
      .orderBy("timestamp", "asc")
      .onSnapshot((snapshot) =>
        setMessages(snapshot.docs.map((doc) => doc.data()))
      );

    return () => {
      unsubscribeRooms();
      unsubscribeMesssages();
    };
  }, [roomId]);

  return (
    <div className="chat-screen">
      <ChatHeader name={roomName} />
      <ChatBody messages={messages} />
      <ChatFooter />
    </div>
  );
}

export default ChatScreen;
