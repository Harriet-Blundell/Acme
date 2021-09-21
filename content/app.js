const express = require('express');

const app = express();

app.get('/', function (req, res) {
    res.send('This is the homepage');
});

app.get('/about-page', function (req, res) {
    res.send('This is the about page');
});

app.get('/blog/june/company-update', function (req, res) {
    res.send('This is the company update page');
});

app.get('/jobs', function (req, res) {
    res.send('This is the jobs page');
});

app.get('/valve', function (req, res) {
    res.send('This is the valve page');
});

app.listen(8080);