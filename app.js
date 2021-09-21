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
    res.send('This is the homepage');
});

app.get('/about-page', (req, res) => {
    const markdownContent = './content/about-page/index.md';
    fs.readFile(markdownContent, 'utf8', (err, markdownContent) => {
        if (err) throw err;

        const html = converter.makeHtml(markdownContent);
        res.render("template", { content: html })
    })
});

app.get('/blog/june/company-update', (req, res) => {
    const markdownContent = './content/blog/june/company-update/index.md';
    fs.readFile(markdownContent, 'utf8', (err, markdownContent) => {
        if (err) throw err;

        const html = converter.makeHtml(markdownContent);
        res.render("template", { content: html })
    })
});

app.get('/jobs', (req, res) => {
    const markdownContent = './content/jobs/index.md';
    fs.readFile(markdownContent, 'utf8', (err, markdownContent) => {
        if (err) throw err;

        const html = converter.makeHtml(markdownContent);
        res.render("template", { content: html })
    })
});

app.get('/valves', (req, res) => {
    const markdownContent = './content/valves/index.md';
    fs.readFile(markdownContent, 'utf8', (err, markdownContent) => {
        if (err) throw err;

        const html = converter.makeHtml(markdownContent);
        res.render("template", { content: html })
    })
});

module.exports = app;