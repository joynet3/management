var express = require('express');
var bodyParsor = require('body-parser');
var app = express();
const port = 5000


app.use(bodyParsor.json())
app.use(bodyParsor.urlencoded({extended:true}))



app.get('/api/customers', function(req, res) {
  res.send([
        {
          "id" : '1',
          "image" : "http://placeimg.com/65/65/any",
          "name" : "조일근",
          "brthday" : "19760126",
          "gender" : "남",
          "job" : "프로그래머",
        },
        {
          "id" : '2',
          "image" : "http://placeimg.com/65/65/any",
          "name" : "홍길동",
          "brthday" : "19780811",
          "gender" : "남",
          "job" : "백수",
        },
        {
          "id" : '3',
          "image" : "http://placeimg.com/65/65/any",
          "name" : "김개똥",
          "brthday" : "19760426",
          "gender" : "남",
          "job" : "몰라",
        }
    ]);
});


app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) })