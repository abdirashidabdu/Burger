var mysql = require("mysql");
var connection;

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);

}else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "new_password",
        database: "wna6lyeom4zlmk2w"
    });
};

connection.connect();

module.exports = connection;