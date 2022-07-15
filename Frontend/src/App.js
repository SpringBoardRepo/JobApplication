import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import RoutesComponent from "./RoutesComponent";

function App() {
  return (
    <div className="App">
      <Router>
        <RoutesComponent />
      </Router>
    </div>
  );
}

export default App;
