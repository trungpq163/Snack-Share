import express, { Router } from 'express';

import { getLecturesCtrl, postVideosCtrl, postVideosYoutubeCtrl } from '../controllers/lecture';

const router: Router = express.Router();

router.route('/lectures').get(getLecturesCtrl);
router.route('/lectures/localupload').post(postVideosCtrl);
router.route('/lectures/youtubeupload').post(postVideosYoutubeCtrl);

export default router;
