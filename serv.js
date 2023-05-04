var app = require("express")();
app.set('trust proxy',true);
app.get("/", function (req, res) {
  console.log(req.socket.remoteAddress);
  console.log(req.ip);
  res.send("hello bro");
});
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log("server running on port: " + PORT);
});