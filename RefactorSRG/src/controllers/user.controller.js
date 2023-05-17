const { User } = require("../models");

const getAllUsers = async (req, res, next) => {
  const { offset, limit } = req.query;
  try {
    const users = await User.findAll({ offset, limit });
    res.json(users);
  } catch (error) {
    next(error);
  }
};

const getOneUser = async (req, res, next) => {
  const { productId } = req.params;
  try {
    if (productId) {
      const user = await User.findOne({ where: { id: productId } });
      res.json(user);
    } else {
      res.status(404).json({
        status: 404,
        message: "ID not found. The user does not exist.",
      });
    }
  } catch (error) {
    next(error);
  }
};

const createUser = async (req, res, next) => {
  try {
    const newUser = new User(req.body);
    await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

const updateUser = async (req, res, next) => {
  const { productId } = req.params;
  const { firstName, lastName, age, email, nationality, active } = req.body;
  const id = req.body.id;
  if (!id) {
    const updateInfo = {
      firstName,
      lastName,
      age,
      email,
      nationality,
      active,
    };
    try {
      const isUser = await User.findOne({ where: { id: productId } });
      if (isUser) {
        await User.update(updateInfo, {
          where: { id: productId },
        });
        res.status(200).json({
          status: 200,
          message: "The user has been updated",
          user: await User.findOne({ where: { id: productId } }),
        });
      } else {
        res.status(404).json({
          status: 404,
          message: "ID not found. The user does not exist",
        });
      }
    } catch (error) {
      console.error(error.message);
      next(error);
    }
  } else {
    res.status(400).json({
      status: 400,
      message: "Action denied. The ID cannot be updated",
    });
  }
};

const deleteUser = async (req, res, next) => {
  const { productId } = req.params;
  try {
    const infoUser = await User.findOne({ where: { id: productId } });
    if (infoUser) {
      await User.destroy({
        where: { id: productId },
      });
      res.status(200).json({
        status: 200,
        message: "The user has been deleted",
        user: infoUser,
      });
    } else {
      res.status(404).json({
        status: 404,
        message: "ID not found. The user does not exist",
      });
    }
  } catch (error) {
    console.error(error.message);
    next(error);
  }
};

module.exports = {
  getAllUsers,
  createUser,
  updateUser,
  getOneUser,
  deleteUser,
};
