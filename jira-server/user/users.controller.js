const { json } = require("express");
const express = require("express");
const router = express.Router();
const usrServices = require("./users.service");

router.post("/verify", authentication);

module.exports = router;

function authentication(req, res, next) {
  usrServices
    .authentication(req.body)
    .then((user) => json(user))
    .catch(next);
}
