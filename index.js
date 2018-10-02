var express= require('express');
var app= express();
var port= process.env.PORT || 3000;

app.us(express.static(__dirname + '/dist'));
app.listen(port, function(){});
