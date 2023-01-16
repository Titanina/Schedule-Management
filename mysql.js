var mysql = require('mysql');
var Connection = mysql.createConnection({
  host : 'localhost',
  user : 'root',
  password : '******',
  database : 'study'
});

Connection.connect();

Connection.query('SELECT * FROM 테이블 명', function(err, results, fields) {
  if(err) {
    console.log(err);
  }

console.log(results);
});

Connection.end();

