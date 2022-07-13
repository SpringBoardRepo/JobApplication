const express = require("express");
const app = express();
const { NotFoundError } = require("./expressError");

const cors = require("cors");
const Jobs = require("./jobs");
app.use(cors());
app.use(express.json());

app.get("/jobs", async function (req, res) {
  try {
    const jobs = await Jobs.findAll();
    return res.json({ jobs });
  } catch (error) {
    console.err(error);
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
