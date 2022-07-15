const express = require("express");
const app = express();
const { NotFoundError } = require("./expressError");

const cors = require("cors");
const Jobs = require("./jobs");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/jobs", async function (req, res) {
  try {
    const q = req.query;
    const jobs = await Jobs.findAll(q);
    return res.json({ jobs });
  } catch (error) {
    console.error(error);
  }
});

app.post("/jobs/apply/:id", async function (req, res) {
  try {
    const jobId = +req.params.id;
    const job = await Jobs.applyForJob(req.body, jobId);
    return res.status(201).json({ job });
  } catch (error) {
    console.log(error);
  }
});

/** Handle 404 errors -- this matches everything */
app.use(function (req, res, next) {
  return next(new NotFoundError());
});

/** Generic error handler; anything unhandled goes here. */
app.use(function (err, req, res, next) {
  if (process.env.NODE_ENV !== "test") console.error(err.stack);
  const status = err.status || 500;
  const message = err.message;

  return res.status(status).json({
    error: { message, status },
  });
});

module.exports = app;
