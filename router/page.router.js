const router = require("express").Router();

const { getPage } = require('../controllers/page.controller.js');

console.log("above")

router.route("/:page").get(getPage);

console.log("below")


module.exports = router;