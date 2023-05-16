const { Router } = require("express");
const { healthCheck, welcomePage } = require("../controllers/app.controller");
const controller = require("../controllers/user.controller");

const usersRouter = new Router();
const BASE_USERS = "/api/v1/users";

usersRouter.get("/", welcomePage);
usersRouter.get("/health", healthCheck);
usersRouter.get(BASE_USERS, controller.getAllUsers);
// usersRouter.get(controller.getAllUsers);
//   .post(usersController.createUser);

// router
//   .route("/:id")
//   .get(usersController.getUserById)
//   .put(usersController.updateUser)
//   .patch(usersController.updateUser)
//   .delete(usersController.deleteUser);

module.exports = usersRouter;
