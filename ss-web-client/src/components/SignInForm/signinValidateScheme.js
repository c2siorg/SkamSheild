const Joi = require("joi");

let schema = Joi.object().keys({
  username: Joi.string().required(),
  password: Joi.string().required(),
});
schema = schema.optional("username", "password");
export default schema;
