const apiRouter = require("express").Router();

const router = require("./page.router.js");

apiRouter.use("/", router);

module.exports = apiRouter;