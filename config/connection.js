var mysql = require('mysql');
var connection;

if (process.env.JAWSDB_URL) {
	connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
  connection = mysql.createConnection({
    host: 'ol5tz0yvwp930510.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'hfc4u1l5ixznz12p',
    password: 'ruzvw6fvzgmnof7k',
    database: 'burgers_db'
  });
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;
