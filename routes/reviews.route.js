
const { Router } = require('express');
const { reviewsController} = require('../controllers/reviews.controller');

const router = Router();

router.post('/reviews', reviewsController.postReviews)
router.get('/reviews', reviewsController.getReviews);
router.patch('/admin/reviews/:id', reviewsController.patchReviews);
router.delete('/admin/reviews/:id', reviewsController.deleteReviews);





module.exports = router;

