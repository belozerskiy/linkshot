module.exports = function(req, res, next){
    res.status(404);
    res.send("Page not found!");
}