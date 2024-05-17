const gamesRouter = require("express").Router();

const {
  findGameById,
  deleteGame,
  createGame,
  findAllGames,
  updateGame,
  checkEmptyFields,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkIsGameExists,
  checkIsVoteRequest
} = require("../middlewares/games");

const {
  sendGameById,
  sendGameUpdated,
  sendGameCreated,
  sendGameDeleted,
  sendAllGames,
} = require("../controllers/games");

const checkAuth = require("../middlewares/auth");

gamesRouter.delete(
  "/games/:id",
  checkAuth,
  deleteGame,
  sendGameDeleted
);
gamesRouter.get("/games/:id", findGameById, sendGameById);

gamesRouter.get("/games", findAllGames, sendAllGames);

gamesRouter.post(
  "/games",
  findAllGames,
  checkIsGameExists,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  createGame,
  sendGameCreated
);

gamesRouter.put(
  "/games/:id",
  findGameById,
  checkIsVoteRequest,
  checkIfUsersAreSafe,
  checkIfCategoriesAvaliable,
  checkEmptyFields,
  checkAuth,
  updateGame,
  sendGameUpdated
);
module.exports = gamesRouter;
