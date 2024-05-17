const {
  sendUserCreated,
  sendUserById,
  sendUserUpdated,
  sendUserDeleted,
  sendAllUsers,
  sendMe
} = require("../controllers/users");
const {
  findUserById,
  findAllUsers,
  createUser,
  updateUser,
  deleteUser,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkEmptyNameAndEmail,
  filterPassword,
  hashPassword,
} = require("../middlewares/users");
const usersRouter = require("express").Router();
const checkAuth = require("../middlewares/auth");

usersRouter.get("/users", findAllUsers, filterPassword, sendAllUsers);

usersRouter.get("/users/:id", findUserById, filterPassword, sendUserById);

usersRouter.post(
  "/users",
  findAllUsers,
  checkIsUserExists,
  checkEmptyNameAndEmailAndPassword,
  checkAuth,
  hashPassword,
  createUser,
  sendUserCreated
);
usersRouter.put(
  "/users/:id",
  checkEmptyNameAndEmail,
  checkAuth,
  updateUser,
  sendUserUpdated
);
usersRouter.delete("/users/:id", checkAuth, deleteUser, sendUserDeleted);

usersRouter.get("/me", checkAuth, sendMe);

module.exports = usersRouter;
