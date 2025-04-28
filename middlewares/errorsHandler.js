function errorsHandler(err, req, res, next) {
    res.status(500);
    console.log(err);
    res.json({
        error: err.message
    });
}   

module.exports = errorsHandler;