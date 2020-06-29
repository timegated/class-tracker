module.exports = cors = (req, res, next) => {
    res.setHeader("Access-Control-Allow-Origin", "http://localhost:8080");
    res.setHeader("Access-Control-Allow-Methods", "GET, POST, OPTIONS, PUT, PATCH, DELETE");
    res.setHeader("Access-Control-Allow-Headers", "X-Requested-With, Content-Type, Accept, x-auth-token");
    res.setHeader("Access-Control-Allow-Credentials", true);
    next()
};