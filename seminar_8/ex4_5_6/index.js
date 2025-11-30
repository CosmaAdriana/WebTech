"use strict";

const express = require("express");
const departmentsRouter = require("./routes/departments");
const statusRouter = require("./routes/status");
require("dotenv").config();

const app = express();

app.use("/api", departmentsRouter);
app.use("/status", statusRouter);

app.use((err, req, res, next) => {
    res.status(500).json({ error: "Something broke!" });
})

app.set("port", process.env.PORT || 7000);

app.listen(app.get("port"), () => {
    console.log(`Server started on http://localhost:${app.get("port")}`);
});