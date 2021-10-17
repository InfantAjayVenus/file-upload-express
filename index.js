const express = require("express");
const app = express();
const upload = require("multer")({ dest: "./uploads" , preservePath: true});

app.use(express.static('public'));
app.set("views", "./templates");
app.set("view engine", "pug");

app.get("/", (_, res) => {
  res.render("index");
});

app.post("/submit", upload.single("file"), (_, res) => {
  try {
    res.sendStatus(200);
  } catch (error) {
    console.error(error);
    res.sendStatus(500);
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
