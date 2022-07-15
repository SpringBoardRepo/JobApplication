import JobsCard from "./JobsCard";
import ApplicationSubmissionApi from "./api";
import { useState, useEffect } from "react";
import Search from "./Search";
import Heading from "./Heading";
function Jobs() {
  const [jobs, setJobs] = useState("");

  useEffect(() => {
    async function getAvailableJobs() {
      const res = await ApplicationSubmissionApi.getAllJobs();
      console.log(res.data);
      setJobs(res.data);
    }

    getAvailableJobs();
  }, []);

  console.log("In Jobs", jobs);
  return (
    <div>
      <Heading />
      <Search />
      {jobs && <JobsCard jobs={jobs} />};
    </div>
  );
}

export default Jobs;
