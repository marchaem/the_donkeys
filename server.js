var express = require('express');
var path = require('path');
var nodemailer=require("nodemailer")
var serveStatic = require('serve-static');
app = express();
app.use(serveStatic(__dirname + "/dist"));
var port = process.env.PORT || 5000;
app.listen(port);
app.post()
console.log('server started  '+ port);
//download joi for input validation
