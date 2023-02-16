var express = require('express');
var app = express();
app.get('/topic/new', function(req, res){
    rse.send('new')
})
app.listen(300, function(){
    console.log('connected, 3000 port!')
})