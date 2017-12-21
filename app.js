var express = require("express");
var app = express();
var myrequest = require("request");
app.set("view engine","ejs");

app.get("/",function(req, res){
   res.render("search") ;
});

app.get("/results", function (req, res) {
    var searchtext = req.query.seachtext;
 myrequest("http://www.omdbapi.com/?s="+searchtext+"&apikey=thewdb", function(error, response, body){
    if (!error && response.statusCode == 200) {
        var data = JSON.parse(body);
        res.render("results",{data: data});
    }
 })
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("movie app has started!");
});