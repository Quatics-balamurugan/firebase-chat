import React, { useState } from "react";
import "./App.css";
import Sidebar from "./sidebar";
import Chat from "./chat";
import Login from "./login";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useStateValue } from "./stateprovider";
function App() {
  const [{ user }, dispatch] = useStateValue();
  return (
    <div className="app">
      {!user ? (
        <Login />
      ) : (
        <div className="app-name">
          <Router>
            <Sidebar />
            <Switch>
              <Route path="/rooms/:roomId">
                <Chat />
              </Route>
              <Route path="/">
                <Chat />
              </Route>
            </Switch>
          </Router>
        </div>
      )}
    </div>
  );
}

export default App;
