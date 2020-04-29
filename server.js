var express = require("express");
var kanbanView = "./client/views/kanban.html";

var PORT = process.env.PORT || 3000;

var app = express();

app.use(express.static("public"));

app.get('/', function (req, res) {
    res.sendFile(__dirname+"/public/views/kanban.html");
  })

app.listen(PORT, function () {
    console.log("App running on port " + PORT + "!");
});