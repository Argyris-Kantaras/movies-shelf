const { DataValidation } = require("../dataValidation");
const { User, validate } = require("../models/users");
const router = require("express").Router();
const bcrypt = require("bcryptjs");

router.post("/login", async (req, res) => {
  // console.log(req.body);
  const { error } = DataValidation.loginValidation(req.body);
  if (error) return res.status(400).send(error.details[0].message);

  //Search for email if exists in database
  const savedUser = await User.findOne({ email: req.body.email });
  if (!savedUser) return res.status(400).send("Email not registered");

  const validPassword = await bcrypt.compare(
    req.body.password,
    savedUser.password
  );

  if (!validPassword) return res.status(401).send("Invalid password");
  res.status(200).send({ registered: true, username: savedUser.name });
  console.log("Logged in");
});

module.exports.loginRouter = router;
