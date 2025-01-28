const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("hey its products");
});

module.exports = router;
