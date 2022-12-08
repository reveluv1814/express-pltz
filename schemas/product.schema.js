const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string().alphanum().min(3).max(15);
const price = Joi.number().integer().min(10);

const createProductSchema = Joi.objects({
  name: name.required(),
  price: price.required(),
});

const updateProductSchema = Joi.objects({
  name: name,
  price: price,
});

const getProductSchema = Joi.objects({
  id: id.required(),
});

module.exports = { createProductSchema, updateProductSchema, getProductSchema };
