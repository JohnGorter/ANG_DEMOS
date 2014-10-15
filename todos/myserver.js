var express = require('express');
var app = express();

var todos = [
    {id:1,title:"hond uitlaten", description:"hond wel goed uitlaten", done:false},
    {id:2,title:"hond uitlaten", description:"hond wel goed uitlaten", done:false},
    {id:3,title:"hond uitlaten", description:"hond wel goed uitlaten", done:false},
    {id:4,title:"hond uitlaten", description:"hond wel goed uitlaten", done:false},
    {id:5,title:"hond uitlaten", description:"hond wel goed uitlaten", done:false},
    {id:6,title:"hond uitlaten", description:"hond wel goed uitlaten", done:false},
    {id:7,title:"hond uitlaten", description:"hond wel goed uitlaten", done:false}
];


app.use(express.static(__dirname + "/app"));

app.get("/todos", function(req, res){
    res.setHeader("Content-Type", "application/json"); 
    res.end(JSON.stringify(todos));
});

app.post("/todos", function(req, res){
    console.log("a new todo is posted...");
    res.setHeader("Content-Type", "application/json"); 
    res.end(JSON.stringify(todos));
});


app.listen(4000); 