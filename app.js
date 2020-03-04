const express = require("express"); //require express
const { projects } = require("./data.json"); // projects from data file
const indexRoute = require("./routes/index");
const aboutRoute = require("./routes/about");
const projectRoute = require("./routes/projects");

const app = express(); // create app
app.set("view engine", "pug"); //pug view engine
app.use("/static", express.static(__dirname + "/public"));

// ROUTES
app.use("/", indexRoute);
app.use("/about", aboutRoute);
app.use("/projects", projectRoute);

//Error
app.use((req, res, next) => {
    const err = new Error("Not Found");
    console.log(req.headers.host);
    err.host = req.headers.host;
    err.status = 404;
    err.pathname = req.url;
    next(err);
});

app.use((err, req, res, next) => {
    res.render("error", { err });
    console.log(
        `Status: ${err.status}, Message: ${err.message}, Path:${err.host}${err.pathname}`
    );
});

//PORT
app.listen(4000);
