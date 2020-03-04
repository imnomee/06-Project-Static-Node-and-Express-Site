const express = require("express"); //require express
const { projects } = require("./data.json"); // projects from data file
const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");
const projectRoute = require("./routes/projects");

const app = express(); // create app
app.set("view engine", "pug"); //pug view engine
app.use("/static", express.static("public"));

// ROUTES
app.use("/", indexRoute);
app.use("/about", aboutRoute);
app.use("/projects", projectRoute);

app.use((req, res, next) => {
    const err = new Error("Not Found");
    err.status = 404;
    next(err);
});

app.use((err, req, res, next) => {
    res.locals.error = err;
    res.status(err.status);
    res.send(err.message);
});

app.listen(3000);
