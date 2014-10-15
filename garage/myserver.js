var express = require('express');
var app = express();

app.use(express.static(__dirname + '/app'));

app.get('/', function(req, res){
  res.send('hello world');
});

var customers = [
                 {name:"john1", lastname:"Gorter"},
                 {name:"john2", lastname:"Gorter"},
                 {name:"john3", lastname:"Gorter"},
                 {name:"john4", lastname:"Gorter"},
                 {name:"john5", lastname:"Gorter"},
                 ];

app.get('/customers', function(req, res){
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(customers));
});

app.post('/customers', function(req, res){
    console.log('new student posted: ' + req.data);
    res.setHeader("content-type", "application/json");
    res.send(JSON.stringify(customers));
});


app.listen(3000);