const showdown = require('showdown');
const fs = require('fs');

exports.getPage = (req, res) => {
    console.log("top")
    const converter = new showdown.Converter();
    const path = req.params.page;



    console.log(path, "<-- path")
    const markdownContent = `./content/${path}/index.md`;

    fs.readFile(markdownContent, 'utf8', (err, markdownContent) => {
        if (err) throw err;

        const html = converter.makeHtml(markdownContent);
        res.status(200).render("template", { content: html })
    })
};