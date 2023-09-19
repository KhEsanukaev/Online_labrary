const User = require('../models/User.model');


module.exports.usersControllers = {

    postUsers: async (req, res) => {
        try {
           await User.create({name: req.body.name});
            res.json('Пользователь добавлен');
        } catch (error) {
            res.json(error);
        }
    },

    getUsers: async (req, res) => {
        try {
            const users = await User.find();
            res.json(users);
        } catch (error) {
            res.json(error);
        }   
    },

    patchUsers: async (req, res) => {
        try {
            await User.findByAndUpdate(req.params.id, {$set: {name: req.body.name}});
            res.json('Имя клиента изменено');
        } catch (error) {
            res.json(error);
        }   
    },
    
    


}