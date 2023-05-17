const { Router } = require("express");
const { healthCheck, welcomePage } = require("../controllers/app.controller");
const controller = require("../controllers/user.controller");

const usersRouter = new Router();
const BASE_USERS = "/api/v1/users";

usersRouter.get("/", welcomePage);
usersRouter.get("/health", healthCheck);
usersRouter.get(BASE_USERS, controller.getAllUsers);
usersRouter.get(`${BASE_USERS}/:productId`, controller.getOneUser);
usersRouter.post(BASE_USERS, controller.createUser);
usersRouter.patch(`${BASE_USERS}/:productId`, controller.updateUser);
usersRouter.delete(`${BASE_USERS}/:productId`, controller.deleteUser);

module.exports = usersRouter;
