const express = require("express");
const path = require("path");
const fs = require("fs");
const cors = require("cors");
const app = express();

function getData() {
  return fs.readFileSync("data.json", "utf-8");
}
function writeData(data) {
  let newData = getData();
  newData += fs.writeFileSync();
}

app.use(express.json());

app.get("/", (req, res) => {
  res.json({
    name: "bob",
    age: 100,
  });
});

app.get("/path", (req, res) => {
  res.sendFile(path.join(__dirname, "/indext.HTML"));
});

app.post("/", (req, res) => {
  const data = req.body;
  writeData(JSON.stringify(data));
  console.log(data);
});

app.listen(3000, () => {
  console.log("server running!");
});
