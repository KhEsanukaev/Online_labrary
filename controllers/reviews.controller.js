const Review = require("../models/Review.model");


module.exports.reviewsController = {

    postReviews: async (req, res) => {
        try {
            await Review.create({name: req.body.name});
            res.json('Отзыв добавлен');
        } catch (error) {
            res.json(error);
        }
    },

    getReviews: async (req, res) => {
        try {
            await Review.find();
            res.json(clients);
        } catch (error) {
            res.json(error);
        }   
    },

    patchReviews: async (req, res) => {
        try {
            await Review.findByAndUpdate(req.params.id, {$set: {name: req.body.name}});
            res.json('Отзыв изменен');
        } catch (error) {
            res.json(error);
        }   
    },

    deleteReviews: async (req, res) => {
        try {
            await Review.findByIdAndRemove(req.params.id);
            res.json("Отзыв удален!");
        } catch (error) {
            res.json(error);
        }
    },


}