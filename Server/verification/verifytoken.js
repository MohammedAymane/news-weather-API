const jwt = require("jsonwebtoken");

module.exports = function (req, res, next) {
  const token = req.header('auth-token');
  try {
    const verified = jwt.verify(token, require("../config/key.json").jwtSecret);
    req.user = verified;
    next();
  } catch (err) {
    res.json({ msg: "Invalid Token" });
  }
};