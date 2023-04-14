const Joi = require("@hapi/joi");

module.exports = {
  addProductSchema: Joi.object({
    name: Joi.string().required,
    description: Joi.string().required,
    price: Joi.number().required,
    availableQuantity: Joi.number().required,
    category: Joi.string().required,
  }),
};
