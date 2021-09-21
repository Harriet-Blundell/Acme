const express = require('express');
const showdown = require('showdown');
const path = require('path');
const engine = require('consolidate');
const fs = require('fs');

const converter = new showdown.Converter();

const app = express();
app.set('views', __dirname + '/views');
app.engine('html', engine.mustache);
app.set('view engine', 'html');

app.get('/', function (req, res) {
    res.status(200).send('This is the homepage');
});

app.get('/about-page', (req, res) => {
    const path = req.route.path;
    const markdownContent = `./content/${path}/index.md`;
    fs.readFile(markdownContent, 'utf8', (err, markdownContent) => {
        if (err) throw err;

        const html = converter.makeHtml(markdownContent);
        res.status(200).render("template", { content: html })
    })
});

app.get('/blog/june/company-update', (req, res) => {
    const path = req.route.path;
    const markdownContent = `./content/${path}/index.md`;
    fs.readFile(markdownContent, 'utf8', (err, markdownContent) => {
        if (err) throw err;

        const html = converter.makeHtml(markdownContent);
        res.status(200).render("template", { content: html })
    })
});

app.get('/jobs', (req, res) => {
    const path = req.route.path;
    const markdownContent = `./content/${path}/index.md`;
    fs.readFile(markdownContent, 'utf8', (err, markdownContent) => {
        if (err) throw err;

        const html = converter.makeHtml(markdownContent);
        res.status(200).render("template", { content: html })
    })
});

app.get('/valves', (req, res) => {
    const path = req.route.path;
    const markdownContent = `./content/${path}/index.md`;
    fs.readFile(markdownContent, 'utf8', (err, markdownContent) => {
        if (err) throw err;

        const html = converter.makeHtml(markdownContent);
        res.status(200).render("template", { content: html })
    })
});

module.exports = app;