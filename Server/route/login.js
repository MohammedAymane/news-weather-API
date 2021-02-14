const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");

// Validation des inputs
const Joi = require("@hapi/joi");

const schema_login = Joi.object({
  username: Joi.string().min(2).required(),
  password: Joi.string().min(2).required(),
});


// login the user
router.post("/", async (req, res) => {
  // Validate data before login the user
  const { error } = schema_login.validate(req.body);
  if (error) return res.status(400).send(error.details[0].message);
  // Create and assign a token to the user
  const token = jwt.sign(
    { _id: require("../config/key.json").adminId },
    require('../config/key.json').jwtSecret, {expiresIn: '900s'}
  );
  res.header("auth-token", token);
  res.send("logged in");
});
module.exports = router;