const allowedCors = [
  "https://practicum.yandex.ru",
  "https://students-projects.ru",
  "https://pindie-frontend.nomoredomainswork.ru"
];

function cors(req, res, next) {
  const { origin } = req.headers;
  if (allowedCors.includes(origin)) {
    // Если это наш друг
    res.header("Access-Control-Allow-Origin", origin);
  }
  next();
}

module.exports =  cors ;
