const Joi = require("joi");

class DataValidation {
  static registerValidation(request) {
    const schema = Joi.object({
      name: Joi.string().min(3).max(100).required(),
      age: Joi.string().min(1).max(150).required(),
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(8).max(100).required(),
    });
    return schema.validate(request);
  }
  static loginValidation(request) {
    const schema = Joi.object({
      email: Joi.string().min(5).max(255).required().email(),
      password: Joi.string().min(8).max(100).required(),
    });
    return schema.validate(request);
  }
}
module.exports = { DataValidation };
