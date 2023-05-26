const { Router } = require("express");
const { healthCheck, welcomePage, User } = require("../controllers");

const usersRouter = new Router();
const BASE_USERS = "/api/v1/users";

usersRouter.get("/", welcomePage);
usersRouter.get("/health", healthCheck);
usersRouter.get(BASE_USERS, User.getAllUsers);
usersRouter.get(`${BASE_USERS}/:productId`, User.getOneUser);
usersRouter.post(BASE_USERS, User.createUser);
usersRouter.patch(`${BASE_USERS}/:productId`, User.updateUser);
usersRouter.delete(`${BASE_USERS}/:productId`, User.deleteUser);

module.exports = usersRouter;
