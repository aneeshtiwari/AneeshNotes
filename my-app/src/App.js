import logo from "./logo.svg";
import "./App.css";
import Leftbar from "./components/Leftbar";
import Mainbar from "./components/Mainbar";
import React from "react";
import { Provider, useState } from "react";
const Mycontext = React.createContext();
function App() {
  const [activeUser, setActiveUsers] = useState(0);
  return (
    <Mycontext.Provider value={activeUser}>
      <div className="myscreen" style={{ margin: "10px" }}>
        <Leftbar setActiveUsers={setActiveUsers} activeUser={activeUser} />
        <Mainbar setActiveUsers={setActiveUsers} activeUser={activeUser} />
      </div>
    </Mycontext.Provider>
  );
}

export default App;
