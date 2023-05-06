const User = require("../models/clientModel");

exports.getAllUsers = async (req, res, next) => {
  const { offset, limit } = req.query;
  try {
    const users = await User.findAll({ offset, limit });
    res.json(users);
  } catch (error) {
    next(error);
  }
};
