import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";

import SidebarScreen from "./screens/SidebarScreen";
import ChatScreen from "./screens//ChatScreen";
import ChatStartScreen from "./screens/ChatStartScreen";
import Login from "./screens/Login";
import { useContextValue } from "./Context";

function App() {
  const [{ user }, dispatch] = useContextValue();

  if (user) {
    return <Login />;
  }

  return (
    <div className="app card">
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
