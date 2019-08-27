var express = require('express');
var app = express();

//setting middleware
app.use(express.static(__dirname)); //Serves resources from public folder


var server = app.listen(1234);
console.log('Serving data on port:1234');
