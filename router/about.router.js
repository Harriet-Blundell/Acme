const aboutRouter = require("express").Router();

const { getAboutPage } = require('../controllers/about.controller.js');

aboutRouter.route("/about-page").get(getAboutPage);

module.exports = aboutRouter;