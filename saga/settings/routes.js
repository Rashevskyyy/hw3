module.exports = (app) => {
    const indexController = require('../Controller/indexController.js');
    const booksControllers = require('../Controller/booksControllers.js');
    app.route('/').get(indexController.index);
    app.route('/books').post(booksControllers.add);
    app.route('/books').get(booksControllers.books);
    app.route('/books/:id').put(booksControllers.updateBook);
    app.route('/books/:id').delete(booksControllers.deleteBook);
}
