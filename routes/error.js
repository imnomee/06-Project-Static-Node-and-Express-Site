function printError(err) {
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
            `Status: ${err.status}, Message: ${err.message}, Path:${err.pathname}`
        );
    });
}
