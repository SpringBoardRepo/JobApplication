import { Card, CardTitle, CardBody, Button } from "reactstrap";

import "./JobsCard.css";

import { Link } from "react-router-dom";

function JobsCard({ jobs }) {
  return (
    <div>
      {jobs.jobs.map((job) => (
        <Card className="JobCard" key={job.job_id}>
          <CardBody>
            <CardTitle className="CardTitle">{job.role}</CardTitle>
            <span>
              <b> {job.client_name}</b>
              <span>
                <p>
                  <b>Skills :</b> {job.skills}
                </p>
                <p>
                  <b>Position Open :</b> {job.quantity}
                </p>
                <p>
                  <b>Contact :</b> {job.email}
                </p>
              </span>
            </span>
          </CardBody>
          <Link to={`/apply/${job.job_id}`}>
            <Button className="applyBtn" color="primary" size="md">
              Apply
            </Button>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default JobsCard;
