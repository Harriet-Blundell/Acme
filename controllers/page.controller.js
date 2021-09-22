const showdown = require('showdown');
const fs = require('fs');
const routeError = require("../error/error.js");

exports.getPage = (req, res) => {
    const converter = new showdown.Converter();
    const baseUrl = req.baseUrl;
    const markdownContent = `./content/${baseUrl}/index.md`;

    fs.readFile(markdownContent, 'utf8', (err, markdownContent) => {
        if (err) routeError(res)

        const html = converter.makeHtml(markdownContent);
        res.status(200).render("template", { content: html })
    })
};