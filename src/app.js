const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.status(200).send("Hola Mundo DevOps CI/CD 🚀");
});

module.exports = app;
