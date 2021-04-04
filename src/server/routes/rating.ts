import express, { Router } from 'express';
import passport from 'passport';

import { addRatingCtrl, getRatingByCourse } from '../controllers/rating';

const router: Router = express.Router();

/**
 * @route POST & GET api/rating
 * @desc Add rating & Get rating
 * @access Private (user)
 */
router
    .route('/rating')
    .get(getRatingByCourse)
    .post(passport.authenticate('jwt', { session: false }), addRatingCtrl);

export default router;
