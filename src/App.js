import React from "react";
import "./App.css";

import SidebarScreen from "./screens/SidebarScreen";
import ChatScreen from "./screens//ChatScreen";

function App() {
  return (
    <div className="App card">
      <SidebarScreen />
      <ChatScreen />
    </div>
  );
}

export default App;
