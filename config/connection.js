// var mysql = require('mysql');
// var connection = mysql.createConnection({
// host: 'ol5tz0yvwp930510.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
// user: 'hfc4u1l5ixznz12p',
// password: 'ruzvw6fvzgmnof7k',
// database: 'l7fgflnfo6a05i3f'
// });

// if (process.env.JAWSDB_URL) {
// connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
// connection = mysql.createConnection({
// port: 3306,
// host: 'localhost',
// user: 'root',
// password: 'xxxx',
// database: 'burgers_db'
// });
// };

// connection.connect(function(err) {
// if (err) {
// console.error('error connecting: ' + err.stack);
// return;
// }
// console.log('connected as id ' + connection.threadId);
// });

// module.exports = connection;

var mysql = require('mysql');

var source = {
    localhost: {
        host: 'localhost',
        user: 'root',
        password: 'xxxx',
        database: 'burgers_db'
    },
    JAWSDB_URL: {
        host: 'ol5tz0yvwp930510.cbetxkdyhwsb.us-east-1.rds.amazonaws.com',
        user: 'hfc4u1l5ixznz12p',
        password: "ruzvw6fvzgmnof7k",
        database: "l7fgflnfo6a05i3f"
    }
};

var connection = mysql.createConnection(source.JAWSDB_URL);

connection.connect(function(err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('connected as id ' + connection.threadId);
});

module.exports = connection;