import axios from "axios";

const BASE_URL = "http://localhost:3001";

class ApplicationSubmissionApi {
  static async getAllJobs(role) {
    const jobs = await axios.get(`${BASE_URL}/jobs?` + JSON.stringify(role));
    return jobs;
  }

  static async applyForJob(data, id) {
    let res = await axios.post(`${BASE_URL}/jobs/apply/${id}`, data);
    return res;
  }
}

export default ApplicationSubmissionApi;
