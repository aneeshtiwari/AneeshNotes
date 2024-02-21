import logo from "./logo.svg";
import "./App.css";
import Leftbar from "./components/Leftbar";
import Mainbar from "./components/Mainbar";

function App() {
  return (
    <div className="myscreen">
      <Leftbar />
      <Mainbar />
    </div>
  );
}

export default App;
