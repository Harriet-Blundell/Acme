function routeError(res) {
    res.status(404).render('404_error_template', { message: "Sorry, page not found." });
}

module.exports = routeError;