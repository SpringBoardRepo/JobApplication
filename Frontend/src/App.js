import "./App.css";
import Jobs from "./Jobs";
import ApplicationSubmissionApi from "./api";
import { useState, useEffect } from "react";

function App() {
  const [jobs, setJobs] = useState("");

  useEffect(() => {
    async function getAvailableJobs() {
      const res = await ApplicationSubmissionApi.getAllJobs();
      console.log(res.data);
      setJobs(res.data);
    }

    getAvailableJobs();
  }, []);

  return <div className="App">{jobs && <Jobs jobs={jobs} />}</div>;
}

export default App;
