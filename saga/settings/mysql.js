const mysql = require('mysql');

const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "express"
});

connection.connect(function (err) {
    if (err) {
        return console.error("Ошибка: " + err.message);
    }
    else {
        console.log("Подключение к серверу MySQL успешно установлено");
    }
});
connection.query(`CREATE DATABASE IF NOT EXISTS express`, function(err, results) {
    if (err) {
        console.log(err);
    } else {
        console.log("Database created");
    }
});
connection.query('CREATE TABLE IF NOT EXISTS books (id INT PRIMARY KEY AUTO_INCREMENT, author varchar(255), title varchar(255), date datetime, image varchar(255),  description varchar(255))', function(err, results) {
    if (err) {
        console.log(err);
    } else {
        console.log("Table books created");
    }
});
module.exports = connection;
