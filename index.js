const app = require("express")();
const upload = require("multer")({ dest: "./uploads" });

app.set("views", "./templates");
app.set("view engine", "pug");

app.get("/", (_, res) => {
  res.render("index");
});

app.post("/submit", upload.single("uploaded_file"), (_, res) => {
  try {
    res.redirect('/');
  } catch (error) {
    console.error(error);
  }
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
