const express = require("express");
const multer = require("multer")
const app = express();
const path = require('path')
global.crypto = require('crypto')

app.use(express.static('public'));
app.set("views", "./templates");
app.set("view engine", "pug");

const storage = multer.diskStorage({
  destination: './uploads/',
  filename: function (req, file, cb) {
    crypto.pseudoRandomBytes(16, function (err, raw) {
      if (err) return cb(err)

      cb(null, raw.toString('hex') + path.extname(file.originalname))
    })
  }
})

const upload = multer({ storage: storage })

app.get("/", (_, res) => {
  res.render("index");
});

app.post("/submit", upload.array("file",10), (req, res) => {
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
