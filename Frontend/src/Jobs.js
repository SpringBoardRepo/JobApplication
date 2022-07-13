import JobsCard from "./JobsCard";

function Jobs({ jobs }) {
  return (
    <div>
      {jobs.map((job) => (
        <JobsCard
          key={job.role}
          client_name={job.client_name}
          poc={job.poc}
          email={job.email}
          role={job.role}
          skills={job.skills}
          quantity={job.quantity}
        />
      ))}
      ;
    </div>
  );
}

export default Jobs;
