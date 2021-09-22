const blogRouter = require("express").Router();

const { getBlogUpdate } = require('../controllers/blog.controller.js');

blogRouter.route("/blog/june/company-update").get(getBlogUpdate);

module.exports = blogRouter;