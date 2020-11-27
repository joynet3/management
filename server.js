var express = require('express');
var bodyParsor = require('body-parser');
var app = express();
const port = 5000


app.use(bodyParsor.json())
app.use(bodyParsor.urlencoded({extended:true}))



app.get('/api/hello', function(req, res) {
  res.send({message:"hellow react"});
});


app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) })