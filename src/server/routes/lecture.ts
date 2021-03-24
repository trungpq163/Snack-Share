import express, { Router } from 'express';
import passport from 'passport';

import { getLecturesCtrl, postVideosCtrl, postVideosYoutubeCtrl } from '../controllers/lecture';

const router: Router = express.Router();

router.route('/lectures').get(passport.authenticate('jwt', { session: false }), getLecturesCtrl);
router
    .route('/lectures/localupload')
    .post(passport.authenticate('instructor', { session: false }), postVideosCtrl);
router
    .route('/lectures/youtubeupload')
    .post(passport.authenticate('instructor', { session: false }), postVideosYoutubeCtrl);

export default router;
