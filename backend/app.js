const express = require("express"); // import express
const app = express(); //assign express to our app

const cors = require("cors"); // import cors

app.use(cors()); // injecting middleware
app.use(express.json());

app.get("/", (req, res) => {
    res.send("<h1>Welcome to our travel app</h1>");
});

module.exports = app;