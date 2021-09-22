const router = require("express").Router();

const { getPage } = require('../controllers/page.controller.js');

router.route("/:page").get(getPage);

module.exports = router;