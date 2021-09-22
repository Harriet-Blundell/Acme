const valvesRouter = require("express").Router();

const { getValvesPage } = require("../controllers/valves.controller.js");

valvesRouter.route("/valves").get(getValvesPage);

module.exports = valvesRouter;