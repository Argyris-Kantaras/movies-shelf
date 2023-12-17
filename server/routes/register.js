const { User } = require("../models/users");
const router = require("express").Router();
const bcrypt = require("bcryptjs");
const { DataValidation } = require("../dataValidation");

router.post("/register", async (req, res) => {
  console.log(req.body);
  const { error } = DataValidation.registerValidation(req.body);
  if (error) {
    return res.status(400).send(error.details[0].message);
  }

  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).send("User already exists. Please sign in");
  } else {
    try {
      const password = await bcrypt.hash(req.body.password, 10);
      const user = new User({
        name: req.body.name,
        age: req.body.age,
        email: req.body.email,
        password: password,
      });
      await user.save();
      res.status(200).send("Congratulations, you are registered successfully");
      return res.status(201).json(user);
    } catch (error) {
      console.log(error);
      return res.status(400).json({ message: error.message });
    }
  }
});

module.exports = router;
