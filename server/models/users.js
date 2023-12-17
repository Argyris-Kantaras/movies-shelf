const mongoose = require("mongoose");
const Joi = require("joi");
const userSchema = new mongoose.Schema([
  {},
  {
    name: {
      type: String,
      required: true,
      min: 3,
      max: 100,
    },
    age: {
      type: Number,
      required: true,
      min: 1,
      max: 150,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      min: 5,
      max: 255,
    },
    password: {
      type: String,
      required: true,
      min: 8,
      max: 100,
    },
    date: {
      type: Date,
      default: Date.now,
    },
  },
]);

const User = mongoose.model("User", userSchema, "users");
module.exports.User = User;
