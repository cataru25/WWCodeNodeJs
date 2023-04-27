const Joi = require("joi");

const validate = (schema) => (req, res, next) => {
  const { error } = schema.validate(req.body, { abortEarly: false });
  if (error) {
    const errors = error.details.map((err) => err.message);
    // https://developer.mozilla.org/en-US/docs/Web/HTTP/Status/422
    // The HyperText Transfer Protocol (HTTP) 422
    // Unprocessable Content response status code indicates that
    // the server understands the content type of the request entity,
    // and the syntax of the request entity is correct,
    // but it was unable to process the contained instructions.
    return res.status(422).json({ errors });
  }
  next(null);
};

const addProductSchema = Joi.object({
  name: Joi.string().required(),
  description: Joi.string().required(),
  price: Joi.number().positive().required(),
  availableQuantity: Joi.number().integer().positive().required(),
  category: Joi.string().required(),
});

const updateProductSchema = Joi.object({
  name: Joi.string().optional(),
  description: Joi.string().optional(),
  price: Joi.number().positive().optional(),
  availableQuantity: Joi.number().integer().positive().optional(),
  category: Joi.string().optional(),
}).min(1);

const deleteProductSchema = Joi.object({
  id: Joi.string().required(),
});

exports.validateNewProduct = validate(addProductSchema);
exports.validateUpdateProduct = validate(updateProductSchema);
exports.validateDeleteProduct = validate(deleteProductSchema);
