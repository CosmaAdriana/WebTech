const express = require("express");
const statusRouter = require("./routes/status");

const app = express();

app.use((req, res, next) => {
    console.log(`[${req.method}] ${req.url}`);
    next();
});

app.use("/status", statusRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ error: "Something broke!" });
});

app.listen(3000, () => {
    console.log("Server pornit pe http://localhost:3000");
});
