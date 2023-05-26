const { Router } = require("express");
const { login, restrictedView } = require("../controllers");
const { isAuth } = require("../middlewares");

const loginRouter = new Router();
const BASE_LOGIN = "/api/v1";

loginRouter.post(`${BASE_LOGIN}/login`, login);
loginRouter.get(`${BASE_LOGIN}/auth`, isAuth, restrictedView);

module.exports = loginRouter;
