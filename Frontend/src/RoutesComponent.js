import { Routes, Route } from "react-router-dom";
import ApplyForJob from "./ApplyForJob";
import Jobs from "./Jobs";

function RoutesComponent() {
  return (
    <Routes>
      <Route exact path="/" element={<Jobs />}></Route>
      <Route exact path="/apply/:id" element={<ApplyForJob />}></Route>
    </Routes>
  );
}

export default RoutesComponent;
