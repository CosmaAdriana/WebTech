const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
    res.status(200).json({ message: "Serverul functioneaza!" });
});

router.get("/error", (req, res) => {
    throw new Error("custom error from status router");
});

module.exports = router;
