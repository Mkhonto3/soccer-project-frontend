import React, { Fragment } from "react";
import "./App.css";

//components

import InputTeam from "./components/InputTeam";
import ListTeams from "./components/ListTeams";

function App() {
  return (
    <Fragment>
      <div className="container">
        <InputTeam />
        <ListTeams />
      </div>
    </Fragment>
  );
}

export default App;
