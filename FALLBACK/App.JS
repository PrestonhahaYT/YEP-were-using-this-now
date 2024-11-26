const express = require("express");
const path = require("path");
const fs = require("fs");
const app = express();
app.use(express.json());

app.get("/users", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("user.json", "utf-8")));
  Q;
});

app.get("/product", (req, res) => {
  res.json(JSON.parse(fs.readFileSync("products.json", "utf-8")));
});

app.get("/data", (req, res) => {
  res.json(getData());
});

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "/index.html"));
});
app.post("/productData", (req, res) => {
  console.log(req.body);
});

app.listen(3000, () => {
  console.log("Server Running");
});
