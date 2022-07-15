import { Card } from "reactstrap";
import "./ApplyForJob.css";
import { useState } from "react";
import ApplicationSubmissionApi from "./api";
import { useParams } from "react-router-dom";
import Alert from "react-bootstrap/Alert";

function ApplyForJob() {
  const INITIAL_DATA = {
    first_name: "",
    last_name: "",
    email: "",
    phone_num: "",
    address: "",
    resume: "",
  };
  const [formData, setFormData] = useState(INITIAL_DATA);
  const [applied, setApplied] = useState(false);

  const { id } = useParams();

  const handleChange = (evt) => {
    const { name, value } = evt.target;
    setFormData((data) => ({
      ...data,
      [name]: value,
    }));
  };

  async function handleSubmit(evt) {
    evt.preventDefault();
    try {
      const res = await ApplicationSubmissionApi.applyForJob(formData, id);
      console.log("Applied", res);
      setApplied(true);
      setFormData(INITIAL_DATA);
    } catch (error) {
      console.error(error);
    }
  }

  return (
    <>
      <h3 className="title">Apply for the Job</h3>
      {applied && <Alert variant="success">Applied! </Alert>}
      <Card className="card">
        <form onSubmit={handleSubmit}>
          <div id>
            <div className="form-group">
              <label htmlFor="first_name">
                First Name
                <span className="astreix">*</span>
              </label>
              <input
                required
                name="first_name"
                value={formData.first_name}
                id="first_name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="last_name">
                Last Name <span className="astreix">*</span>
              </label>
              <input
                required
                name="last_name"
                value={formData.last_name}
                id="last_name"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">
                Email
                <span className="astreix">*</span>
              </label>
              <input
                required
                name="email"
                value={formData.email}
                id="email"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="phone">
                Phone
                <span className="astreix">*</span>
              </label>
              <input
                required
                name="phone_num"
                value={formData.phone_num}
                id="phone"
                onChange={handleChange}
              />
            </div>
            <div className="form-group">
              <label htmlFor="address">
                Address
                <span className="astreix">*</span>
              </label>
              <input
                required
                name="address"
                value={formData.address}
                id="address"
                onChange={handleChange}
              />
            </div>
            <div>
              <label htmlFor="resume">
                Resume
                <span className="astreix">*</span>
              </label>
              <input
                required
                name="resume"
                value={formData.resume}
                type="file"
                id="resume"
                onChange={handleChange}
              />
            </div>
            <button className="SubmitButton" type="submit">
              SUBMIT APPLICATION
            </button>
          </div>
        </form>
      </Card>
    </>
  );
}

export default ApplyForJob;
