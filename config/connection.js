var mysql = require('mysql');
var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
  database : 'burger_db'
});
 
connection.connect(function(err){
    if(err)throw err;
    console.log("connected as id: "+connection.threadId);
});
 
// connection.query('SELECT 1 + 1 AS solution', function (error, results, fields) {
//   if (error) throw error;
//   console.log('The solution is: ', results[0].solution);
// });
 
module.exports = connection;