const Book = require("../models/Book.model");

module.exports.booksController = {
  addBooks: async (req, res) => {
    try {
       
      const { title, author, genre } = req.body;
      const book = await Book.create({ title, author, genre });
      res.json(book);
    } catch (error) {
      res.json(error);
    }
  },

  
  deleteBooks: async (req, res) => {
    try {


      const book = await Book.findByAndremove(req.params.id);
      res.json(book);
    } catch (error) {
      res.json(error);
    }
  },

  patchBooks: async (req, res) => {
    try {
      const book = await Book.findByIdAndUpdate(req.params.id, {$set: {name: req.bady.name}});
      res.json(book);
    } catch (error) {
      res.json(error);
    }
  },


  getBooks: async (req, res) => {
    try {
      const book = await Book.find().populat(e);
      res.json(book);
    } catch (error) {
      res.json(error);
    }
  },

  getBooksId: async (req, res) => {
    try {
      const book = await Book.findById(req.params.id);
      res.json(book);
    } catch (error) {
      res.json(error);
    }
  },

  getBooksForGenreId: async (req, res) => {
    try {
      const book = await Book.find({genreId: req.body.genreId});
      res.json(book);
    } catch (error) {
      res.json(error);
    }
  },

  getBooks: async (req, res) => {
    try {
      const book = await Book.find().populate("genreId");
      res.json(book);
    } catch (error) {
      res.json(error);
    }
  },

  
  rentBook: async (req, res) => {
    try {
        const { clientId, bookId } = req.params

        const client = await Client.findById(clientId)
        const book = await Book.findById(bookId)

        if (client.isBlocked === true) {
            return res.json("Вы заблокированы")
        }

        if (client.rentBook.length === 3) {
            return res.json('Вы не можете брать больше 3х книг ')
        }

        if (bookId.clientId !== null) {
            return res.json("Книга уже арендована другим пользователем")
        }

        await client.updateOne({ $push: { rentBook: bookId } })
        await book.updateOne({ clientId: clientId });

        await client.save();
        await book.save();

    } catch (error) {
        res.json(error.message)
    }


},


returnBook: async (req, res) => {
    try {
        const { clientId, bookId } = req.params

        await Client.findByIdAndUpdate(clientId, { $pull: { rentBook: bookId } })
        await Book.findByIdAndUpdate(bookId, { clientId: null });

        res.json("Книга возвращена")
    } catch (error) {
        res.json(error.message)
    }
},


blockedUser: async (req, res) => {
    try {

        const { clientId } = req.params

        const client = await Client.findById(clientId)

        if (client.isBlocked) {
            await client.updateOne({ $set: { isBlocked: false } })
            await client.save()
            return res.json('Вы разблокировали клиента')
        }

        await client.updateOne({ $set: { isBlocked: true, countBookId: [] } })
        await client.save();
        await Book.updateMany({ clientId: clientId }, { $set: { clientId: null } })

        await client.save()
        res.json("Вы забрали книгу и заблокировали пользователя")

    } catch (error) {
        res.json(error.message)
    }
},


};
