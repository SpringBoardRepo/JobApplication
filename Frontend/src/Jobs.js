import JobsCard from "./JobsCard";

function Jobs({ jobs }) {
  console.log("In Jobs", jobs);
  return (
    <div>
      {jobs.jobs.map((job) => (
        <JobsCard />
      ))}
      ;
    </div>
  );
}

export default Jobs;
