const mongoose = require("mongoose");

const userSchema = mongoose.Schema({

    name: String,
    isblocked: {
        type: Boolean,
        default: false
    },
    countBookId: [{
        type: mongoose.SchemaTypes.ObjectId,
        ref: "Book"
    }]

});

const User = mongoose.model('User', userSchema);


module.exports = User;