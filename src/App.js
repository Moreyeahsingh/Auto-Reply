import React from "react";
import Routers from "./route";
import { observer } from "mobx-react-lite";
import "./App.css";

const App = observer(() => {
  return (
    <div className="App">
      <Routers></Routers>
    </div>
  );
});

export default App;
