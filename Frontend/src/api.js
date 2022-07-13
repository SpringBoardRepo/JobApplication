import axios from "axios";

const BASE_URL = "http://localhost:3001";

class ApplicationSubmissionApi {
  static async getAllJobs() {
    const jobs = await axios.get(`${BASE_URL}/jobs`);
    console.log(jobs);
    return jobs;
  }
}

export default ApplicationSubmissionApi;
