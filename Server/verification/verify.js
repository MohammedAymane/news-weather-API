const express = require("express");
const router = express.Router();

const verifyToken = require("./verifytoken");

router.get("/", (req, res, next) => {
  verifyToken(req, res, next);
  next();
});

module.exports = router;