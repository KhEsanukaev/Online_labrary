const { Router } = require('express');
const { booksController } = require('../controllers/books.controller');

const router = Router();

router.post('/admin/books', booksController.addBooks);
router.delete('/admin/books/:id', booksController.deleteBooks);
router.patch('/admin/books/:id', booksController.patchBooks);
router.get('/admin/books', booksController.getBooks);
router.patch('/books/book/client/:id', booksController.blockedUser);


router.get('/books', booksController.getBooks);
router.get('/books/genre/:id', booksController.getBooksForGenreId);
router.get('/books/:id', booksController.getBooksId);
router.patch('/books/rent/:id', booksController.rentBook);
router.patch('/books/return/:id', booksController.returnBook);


router.patch('/books/clientId/:bookId',);


module.exports = router;
