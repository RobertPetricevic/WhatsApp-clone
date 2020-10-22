import React from "react";

import ChatList from "../components/ChatList";
import SidebarHeader from "../components/SidebarHeader";

function SidebarScreen() {
  return (
    <div className="sidebar">
      <SidebarHeader />
      <ChatList />
    </div>
  );
}

export default SidebarScreen;
