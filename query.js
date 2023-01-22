var Connection = mysql.createConnection(conn); // DB커넥션 생성
Connection.connect(); // DB 접속

var testQuery ="INSERT INTO `members` (`username`, `password`) VALUES (`test, `test`);";

Connection.query(testQuery, function (err, results, fields) { // testQuery 실행

  if(err) {
    console.log(err);
  }
  console.log(results);


});

testQuery = "SELECT * FROM MEMBERS";

Connection.query(testQuery, function (err, results, fields) { //testquery 실행
  if(err) {
    console.log(err);
  }
  console.log(results);

});


var Connection = mysql.createConnection(conn); // DB커넥션 생성
Connection.connect(); // DB 접속

var testQuery ="INSERT INTO `members` (`username`, `password`) VALUES (`test, `test`);";

Connection.query(testQuery, function (err, results, fields) { // testQuery 실행

  if(err) {
    console.log(err);
  }
  console.log(results);


});

testQuery = "SELECT * FROM MEMBERS";

Connection.query(testQuery, function (err, results, fields) { //testquery 실행
  if(err) {
    console.log(err);
  }
  console.log(results);

});

Connection.end(); // DB 접속 종료

