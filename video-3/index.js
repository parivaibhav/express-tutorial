const express = require("express");

const app = express();

app.use(express.json());

app.post("/submit", (req, res) => {
  const { name, email } = req.body;
  res.send(`data recived :name ${name} and email:${email}`);
});

app.get("/", (req, res) => {
  res.send("working");
});

app.listen(3000, () => {
  console.log("Hello");
});
