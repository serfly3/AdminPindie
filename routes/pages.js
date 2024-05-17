const pagesRouter = require("express").Router();
const { sendIndex , sendDashboard } = require("../controllers/auth.js");
const checkCookiesJWT = require('../middlewares/auth')
const checkAuth = require('../middlewares/auth')

pagesRouter.get("/", sendIndex);

pagesRouter.get("/admin/**", checkCookiesJWT, checkAuth, sendDashboard); 

module.exports = pagesRouter;
