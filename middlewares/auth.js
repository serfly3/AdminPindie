const jwt = require("jsonwebtoken");

const checkAuth = (req, res, next) => {
  console.log('start')
  const { authorization } = req.headers;
  if (!authorization || !authorization.startsWith("Bearer ")) {
    console.log(authorization);
    return res.status(401).send({ message: "Необходима авторизация" });
  }
  const token = authorization.replace("Bearer ", "");
  try {
    req.user = jwt.verify(token, "some-secret-key");
  } catch (err) {
    console.log(err)
    return res.status(401).send({ message: "Необходима авторизация" });
  }
  console.log('checkAuth')
  next();
};

const checkCookiesJWT = (req, res, next) => {
  if (!req.cookies.jwt) {
    return res.redirect("/");
  }
  req.headers.authorization = `Bearer ${req.cookies.jwt}`;
  console.log('checkAuth')
  next();
};

module.exports = checkAuth;
module.exports = checkCookiesJWT;
