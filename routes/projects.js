const express = require("express");
const router = express.Router();
const { projects } = require("../data.json");

router.get("/", (req, res) => {
    // const project = projects[0];
    // res.render("project", { project });
    res.redirect("/projects/0");
});
router.get("/:id", (req, res, next) => {
    const queryId = req.params.id;
    const project = projects.find(p => p.id == queryId);
    if (!project) {
        const err = new Error("No Records Found");
        err.status = 400;
        err.pathname = req.url;
        err.host = req.headers.host;
        next(err);
    } else res.render("project", { project });
});

router.use((req, res, next) => {
    const err = new Error("Not Found");
    console.log(req.headers.host);
    err.host = req.headers.host;
    err.status = 404;
    err.pathname = req.url;
    next(err);
});

module.exports = router;
