const mysql = require('mysql'); // #1

const mysqlConnection = {
  init: function() {    // #2
    return mysql.createConnection({
              host : process.env.host,
              port : process.env.port,
              user : process.env.user,
              password : process.env.password,
              database : process.env.database
    });
  },
open: function(con) {   // #3
    con.connect(err => {
      if(err){
        console.log("MySQL 연결에 실패하였습니다. 에러 : ", err);

      } 
      else {
        console.log("MySQL 연결에 성공했습니다.");
      }


    });

},

close: function(con) { // #4
  con.end(err => {
    if(err) {
      console.log("MySQL 종료에 실패하였습니다. 에러 : ", err);

    }
    else {
      console.log("MySQL을 종료합니다.");
    }
  })


}


}

module.exports = mysqlConnection; // #5