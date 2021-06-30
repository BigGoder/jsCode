var express = require("express");
var app = express();
app.use(express.static("./toyVue")).listen(3000);