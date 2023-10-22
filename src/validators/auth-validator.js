const Joi = require("joi");

exports.registerSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email().allow("").allow(null),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
});

exports.loginSchema = Joi.object({
  emailOrMobile: Joi.string().required(),
  password: Joi.string().required(),
});

exports.editSchema = Joi.object({
  firstName: Joi.string().trim().required(),
  lastName: Joi.string().trim().required(),
  email: Joi.string().email({ tlds: false }).allow(null).allow(""),
  mobile: Joi.string()
    .pattern(/^[0-9]{10}$/)
    .required(),
  address: Joi.string().trim().allow(null).allow(""),
});
