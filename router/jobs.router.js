const jobsRouter = require("express").Router();

const { getJobsPage } = require("../controllers/jobs.controller.js");

jobsRouter.route("/jobs").get(getJobsPage);

module.exports = jobsRouter;