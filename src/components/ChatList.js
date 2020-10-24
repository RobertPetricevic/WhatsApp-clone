import React, { useState, useEffect } from "react";
import db from "../firebase";

import ChatBox from "./ChatBox";
import { useContextValue } from "../Context";

function ChatList() {
  const [rooms, setRooms] = useState([]);
  const [{ searchRooms }, dispatch] = useContextValue();

  useEffect(() => {
    const unsubscribe = db.collection("rooms").onSnapshot((snapshot) =>
      setRooms(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );

    return () => {
      unsubscribe();
    };
  }, []);

  const displayedRooms = rooms.map((room) => {
    if (searchRooms) {
      if (room.data.name.toLowerCase().includes(searchRooms)) {
        return <ChatBox key={room.id} id={room.id} name={room.data.name} />;
      }
    } else {
      return <ChatBox key={room.id} id={room.id} name={room.data.name} />;
    }
  });

  return (
    <div className="chatlist">
      <ChatBox addNew />
      {displayedRooms}
    </div>
  );
}

export default ChatList;
