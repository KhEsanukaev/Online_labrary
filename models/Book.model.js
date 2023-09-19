const mongoose = require('mongoose');

const bookShema = mongoose.Schema({
    name: String,
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Author'
    },

    genreId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Genre'
    },
    clientId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'Client',
        default: null 

    }
});

const Book = mongoose.model('Book', bookShema);
module.exports = Book;