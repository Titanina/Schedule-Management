const express = require('express')
const app = express()
const mysql = require("mysql");
const port = 3000;

app.get('/', (req, res) => res.send('<h1>Hello Shiba World!<h1>'));



app.listen(3000, () => {
  //포트번호 3000으로 서버 구동
  console.log("백엔드 서버를 동작합니다.");

const mysqlConnecte = mysql.createConnection({

  host : "localhost",
  port : "3000",
  user : "root",
  password : "120264",
  database : "study"


});

mysqlConnecte.connect(error => {

  if(error) {

    console.log("Data Base 연결에 실패했습니다. Error 내용 : ", error);
  } //if(error ) 끝

  else {
    console.log("Data Base 연결에 성공하였습니다!");

}
})

// table 생성
sql = "create table test_board(\
    no int auto_increment primary key,\
    title varchar(30) not null,\
    content varchar(100) not null\
    )"

  mysqlConnecte.query(sql, (error, result) => {
    if(error) {
        console.log("Table 생성에 실패했습니다. Error 내용: ", error);
    } // if(error) 끝
    else {console.log("Table 생성에 성공하였습니다!", result);
  }

  })



});

