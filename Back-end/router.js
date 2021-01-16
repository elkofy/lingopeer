const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send({ response: "Le serveur est opérationnel." }).status(200);
});

module.exports = router;