const Genre = require('../models/Genre.model');


module.exports.genresControllers = {

    getGenres: async (req, res) => {
        try {
            const genres = await Genre.find();
            res.json(genres);
        }   catch (error) {
            res.json(error);
    }
    },
    postGenres: async (req, res) => {
        try {
            await Genre.create({name: req.body.name});
            res.json('Жанр добавлен');
        } catch (error) {
            res.json(error.message);
        }
    },

    patchGenres: async (req, res) => {
        try {
            await Genre.findByAndUpdate(req.params.id, {$set: {name: req.body.name}});
            res.json('Имя жанра изменено');
        } catch (error) {
            res.json(error);
        }   
    },

    deleteGenres: async (req, res) => {
        try {
            await Genre.findByIdAndRemove(req.params.id);
            res.json("Жанр удален!");
        } catch (error) {
            res.json(error);
        }
    },



}





