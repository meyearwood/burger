var mysql = require('mysql');
var jawsDBConn = mysql.createConnection({
    host: 'ol5tz0yvwp930510.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
    user: 'hfc4u1l5ixznz12p',
    password: 'ruzvw6fvzgmnof7k',
    database: 'l7fgflnfo6a05i3f'
});
var devConn = mysql.createConnection({
    port: 3306,
    host: 'localhost',
    user: 'root',
    password: 'xxxx',
    database: 'burgers_db'
});

var connection;

if (process.env.NODE_ENV === 'production') {
    connection = jawsDBConn;
} else {
    connection = devConn;
};

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;