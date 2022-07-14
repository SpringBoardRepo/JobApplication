import "./App.css";
import Heading from "./Heading";
import ApplicationSubmissionApi from "./api";
import { useState, useEffect } from "react";
import JobsCard from "./JobsCard";
import Search from "./Search";

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

  return (
    <div className="App">
      <Heading />
      <Search />
      {jobs && <JobsCard jobs={jobs} />}
    </div>
  );
}

export default App;
