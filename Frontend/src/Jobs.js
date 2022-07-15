import JobsCard from "./JobsCard";
import ApplicationSubmissionApi from "./api";
import { useState, useEffect } from "react";
import Search from "./Search";
import Heading from "./Heading";
function Jobs() {
  const [jobList, setJobList] = useState("");

  useEffect(() => {
    getAvailableJobs();
  }, []);

  async function getAvailableJobs(role) {
    const res = await ApplicationSubmissionApi.getAllJobs(role);
    setJobList(res.data);
  }
  // if (!jobList) return "Loading...";

  return (
    <div>
      <Heading />
      <Search search={getAvailableJobs} />
      {jobList ? <JobsCard jobs={jobList} /> : <p>No results found</p>}
    </div>
  );
}

export default Jobs;
