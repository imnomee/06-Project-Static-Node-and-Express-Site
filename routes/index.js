const express = require("express");
const router = express.Router();
const { projects } = require("../data.json"); // projects from data file

router.get("/", (req, res) => {
    res.render("index", { projects });
});

router.get("/index", (req, res) => {
    res.render("index", { projects });
});

module.exports = router;
