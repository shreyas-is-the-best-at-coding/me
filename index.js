const express = require("express");
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.sendFile(__dirname + "/home.html");
});

app.get("/fun", (req, res) => {
  res.sendFile(__dirname + "/fun.html");
});

app.get("/piday", (req, res) => {
  res.sendFile(__dirname + "/piday.html");
});

app.get("/sound-verification.mp3", (req, res) => {
  res.sendFile(__dirname + "/sound-verification.mp3");
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
