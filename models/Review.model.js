const mongoose = require('mongoose');

const reviewShema = mongoose.Schema({
    text: String,
    bookId: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Book"
    },
});

const Review = mongoose.model('Review', reviewShema);
module.exports = Review;