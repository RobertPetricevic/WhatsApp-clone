import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import SidebarScreen from "./screens/SidebarScreen";
import ChatScreen from "./screens//ChatScreen";
import ChatStartScreen from "./screens/ChatStartScreen";

function App() {
  return (
    <div className="App card">
      <SidebarScreen />
      <Switch>
        <Route exact path="/">
          <ChatStartScreen />
        </Route>
        <Route path="/:roomId">
          <ChatScreen />
        </Route>
      </Switch>
    </div>
  );
}

export default App;
