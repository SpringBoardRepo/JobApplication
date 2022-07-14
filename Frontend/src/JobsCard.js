import { Card, CardTitle, CardText, CardBody, Button } from "reactstrap";
// import { Link } from "react-router-dom";
import "./JobsCard.css";
import { useState } from "react";

function JobsCard({ jobs }) {
  const [applied, setapplied] = useState(false);

  const handleApply = (evt) => {
    setapplied(true);
  };

  return (
    <div>
      {jobs.jobs.map((job) => (
        <Card className="JobCard" key={job.role}>
          {applied}
          <CardBody>
            <CardTitle className="CardTitle">{job.role}</CardTitle>
            <span>
              <b> {job.client_name}</b>
              <span>
                <p>Skills : {job.skills}</p>
                <p>Position Open : {job.quantity}</p>
                <p>Contact : {job.email}</p>
              </span>
            </span>
          </CardBody>
          <Button
            className="applyBtn"
            color="primary"
            size="md"
            onClick={handleApply}
            disabled={applied}
          >
            {applied ? "Applied" : "Apply"}
          </Button>
        </Card>
      ))}
    </div>
  );
}

export default JobsCard;
