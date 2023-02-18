const express = require('express')
const mysql = require('mysql')
const app = express()
const port = 3000
const dotenv = require('dotenv').config()
const mysqlConObj = require('./config/mysql')
const db = mysqlConObj.init()
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))
app.use(express.urlencoded({extended: true}))



app.post('/', (req,res) => res.send('<h1>ShibaWorld</h1>'))

app.listen(port, () => console.log('서버가 작동중입니다.'))

app.post('localhost:3000', function(요청, 응답){
  console.log(요청.body.title);
  응답.send('전송완료')
});

