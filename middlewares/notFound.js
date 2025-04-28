function notFound(req, res, next) {
    res.status(404);
    res.json({
        "error": "Not Found",
        "message": "Il post non è stato trovato"
    });
    
}
module.exports = notFound;