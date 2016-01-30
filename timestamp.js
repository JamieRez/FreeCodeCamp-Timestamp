var express = require('express');
var app = express();

app.route('/:name').get(function (req,res){
    
    if(req.params.name.indexOf(" ") == -1){
        var time = new Date(req.params.name * 1000);
        var isUnix = true;
    }else{
         time = new Date(req.params.name);
    }
    
    
    var realTime = ((time.getMonth()+1) + "-" + time.getDate() + "-" + time.getFullYear());
    
    var myArr = [realTime, (time.getTime() / 1000)];
    
    res.send(myArr);
})

app.get('/', function(req,res){
    res.send("Put a date/UNIX as a parameter after the URL")
})



app.listen(8080, function(err){
    console.log("Listening on Port 8080");
})