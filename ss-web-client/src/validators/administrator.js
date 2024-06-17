const Joi = require("joi");

const schemaDefault = Joi.object({
  name: Joi.string()
    .min(3)
    .max(100)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'au'] } }),
  address: Joi.string()
    .min(3)
    .max(30)
    .required(),
  phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
  password: Joi.string()
    .pattern(new RegExp("^[a-zA-Z0-9]{3,30}$"))
    .required()
    .messages({
      "string.pattern.base": `Password should be between 3 to 30 characters and contain letters or numbers only`,
      "string.empty": `Password cannot be empty`,
      "any.required": `Password is required`,
    }),
  confirmPassword: Joi.valid(Joi.ref("password")).required().messages({
    "any.only": "The two passwords do not match",
    "any.required": "Please re-enter the password",
  }),
});

export const schemaNormal = Joi.object({
  name: Joi.string()
    .min(3)
    .max(30)
    .required(),
  email: Joi.string()
    .email({ minDomainSegments: 2, tlds: { allow: ['com', 'net', 'au'] } }),
  address: Joi.string()
    .min(3)
    .max(30)
    .required(),
  phoneNumber: Joi.string().length(10).pattern(/^[0-9]+$/).required(),
});

export default schemaDefault;