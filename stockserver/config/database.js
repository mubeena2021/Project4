const mysql = require('mysql2');
const con = mysql.createConnection({

    host:"localhost" ,
    user:"root",
    password:"Root12345!",
    database:"stockdata"
    
});

con.connect(function(err) {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('connected as id ' + con.threadId);
  });

module.exports = con;