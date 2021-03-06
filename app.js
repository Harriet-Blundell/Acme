const express = require('express');
const engine = require('consolidate');
const { getPage } = require("./controllers/page.controller.js");

const app = express();
app.use(express.static('public'));
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.get("/", (req, res) => {
    res.redirect(301, "home");
});

app.use("/*", getPage);

module.exports = app;