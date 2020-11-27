var express = require('express');
var bodyParsor = require('body-parser');
var app = express();
const port = process.env.PORT || 5000

const fs = require('fs')
const data = fs.readFileSync('./database.json')
const conf = JSON.parse(data)
const mysql  = require('mysql')



app.use(bodyParsor.json())
app.use(bodyParsor.urlencoded({extended:true}))

const connection = mysql.createConnection({
  host     : conf.host,
  user     : conf.user,
  password : conf.password,
  port     : conf.port,
  database : conf.database
});



app.get('/api/customers', (req, res) => {
  connection.query('SELECT * from customer', (error, rows, field) => {
    if (error) throw error;
    console.log('customer info is: ', rows);
    res.send(rows);
  });
});



const multer = require('multer');
const upload = multer({ dest: './uploads', limits: { fileSize: 5 * 1024 * 1024 } });
app.use('/image',express.static('./uploads'));


app.post('/api/addUser',upload.single('image'), (req, res) => {
  let sql = 'INSERT INTO customer (name,image,birthday,gender,job) VALUES (?,?,?,?,?);';
  let image = '/image/' + req.file.filename;
  let userName = req.body.userName;
  let birthday = req.body.birthday;
  let gender = req.body.gender;
  let job = req.body.job;
  let param = [userName,image,birthday,gender,job];
  connection.query(sql,param,
      (error, rows, field) =>{
        res.send(rows);
      }
  ); 
})

app.listen(port, () => { console.log(`Example app listening at http://localhost:${port}`) })