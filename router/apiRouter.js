const apiRouter = require("express").Router();

const aboutRouter = require("./about.router.js");
const blogRouter = require('./blog.router.js');
const jobsRouter = require("./jobs.router.js");
const valvesRouter = require("./valves.router.js");

apiRouter.use("/", aboutRouter);
apiRouter.use("/", blogRouter);
apiRouter.use("/", jobsRouter);
apiRouter.use("/", valvesRouter);

module.exports = apiRouter;