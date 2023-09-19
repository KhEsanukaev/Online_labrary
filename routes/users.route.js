const { Router } = require('express');
const { usersControllers } = require('../controllers/users.controller');

const router = Router();


router.post('/users', usersControllers.postUsers);
router.get('/users', usersControllers.getUsers);
router.patch('/users/:id', usersControllers.patchUsers);

module.exports = router;