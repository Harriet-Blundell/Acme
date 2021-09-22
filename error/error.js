function routeError(req, res) {
    res.status(404).send({ msg: "Page Not Found" });
}

module.exports = routeError;