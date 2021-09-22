const express = require('express');
const engine = require('consolidate');
const apiRouter = require("./router/apiRouter.js");

const app = express();
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.use("/", apiRouter);

module.exports = app;