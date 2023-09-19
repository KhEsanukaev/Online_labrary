const { Router } = require('express');
const { genresControllers } = require('../controllers/genres.controller');

const router = Router();


router.post('/admin/genres', genresControllers.postGenres);
router.delete('/admin/genres/:id', genresControllers.deleteGenres);
router.get('/admin/genres', genresControllers.getGenres);
router.patch('/admin/genres', genresControllers.patchGenres)


module.exports = router;