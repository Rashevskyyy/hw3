const response = require('../response');
const mysql = require('../settings/mysql.js');

exports.books = (req, res) => {
    mysql.query('select * from `books`', (error, rows, fields) => {
        if (error) {
            console.log("Ошибка: " + error);
        }
        else {
            response.status(rows, res);
        }
    });
}
exports.add = (req, res) => {
    const body = req.body;
    const sql = `INSERT INTO books (author, title, date, image,  description) VALUES ("${body.author}", "${body.title}", "${body.date}", "${body.image}", "${body.description}")`;

    mysql.query(sql, (error, results) => {
        if (error) {
            console.log("Ошибка: " + error);
        }
        else {
            response.status(results, res);
        }
    })
}
exports.updateBook = (req, res) => {
    const body = req.body;
    const { id: idParam } = req.params;
    const id = parseInt(idParam);

    if (isNaN(id)) {
        throw new Error('Not a number', id);
    }

    const sql1 = `UPDATE books SET 
        author = "${body.author}", 
        title = "${body.title}", 
        date = "${body.date}", 
        image = "${body.image}",  
        description = "${body.description}" 
        WHERE id = ${id} `;
    mysql.query(sql1, (error, results) => {
        if (error) {
            console.log("Ошибка: " + error);
        }
        else {
            response.status(results, res);
        }
    })
}
exports.deleteBook = (req, res) => {
    const body = req.body;
    const { id: idParam } = req.params;
    const id = parseInt(idParam);

    if (isNaN(id)) {
        throw new Error('Not a number', id);
    }

    const sql1 = `DELETE FROM books WHERE id = ${id} `;
    mysql.query(sql1, (error, results) => {
        if (error) {
            console.log("Ошибка: " + error);
        }
        else {
            response.status(results, res);
        }
    })
}
