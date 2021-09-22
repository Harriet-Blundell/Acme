const express = require('express');
const engine = require('consolidate');
const pageRouter = require("./router/page.router.js");

const app = express();
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.use("/", pageRouter);

module.exports = app;