import { Outlet } from "react-router-dom";
import "./App.css";
import Nav from "./components/Nav";

function App() {
  return (
    <div className="max-w-7xl mx-auto">
      <Nav></Nav>
      <Outlet></Outlet>
    </div>
  );
}

export default App;
