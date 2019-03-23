var hbs = require("hbs");
var express = require("express");
var app = express();

app.use("/static",express.static(__dirname+"/../dist"));

app.set("view engine","hbs");

app.get("/",function(req,res){
    res.send("hello world");
});

app.get("/demo1",function(req,res){
    res.render("demo1.hbs");
});

app.get("/demo2",function(req,res){
    res.render("demo2.hbs");
});


var server = app.listen(3060,function(){
    console.log("server is running in port %s", server.address().port);
});