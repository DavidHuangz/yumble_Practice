import React from "react";
import "./App.css";
import StartPage from "./components/StartPage";
import CreateGroup from "./components/CreateGroup";
import JoinGroup from "./components/JoinGroup";
import Preferences from "./components/Preferences";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="BackGroundImage">
        <Switch>
          <Route path="/" exact component={StartPage} />
          <Route path="/CreateGroup" component={CreateGroup} />
          <Route path="/JoinGroup" component={JoinGroup} />
          <Route path="/Preferences" component={Preferences} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
