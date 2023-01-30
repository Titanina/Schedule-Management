const { error } = require("console");
const mysql = require('mysql');

const mysqlConnection = {

  init: function() {    
    return mysql.createConnection({

              host : process.env.host,
              port : process.env.port,
              user : process.env.user,
              password : process.env.password,
              database : process.env.database
    });
  },
open: function(con) {   

    connection.connect(error => {

      if(err){
        console.log("데이터 베이스 연결에 실패했습니다. 에러 : ", err);

      } 
      console.log("데이터 베이스 연결에 성공했습니다.");
 
    });

},

close: function ( connection ) {

  connection.end(error => {
    if(error) {
      console.log("데이터 베이스를 종료하는데 실패했습니다. 에러 : ", error);

    }
 
      console.log("데이터베이스를 종료합니다.");

  });


}


}

module.exports = mysqlConnection; 
