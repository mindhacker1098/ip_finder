var app = require("express")();
app.set('trust proxy',true);
app.get("/", function (req, res) {
  console.log(req.socket.remoteAddress);
  console.log(req.ip);
  res.redirect("https://youtu.be/hbxx3Jt-6vE")
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server running on port: " + PORT);
});