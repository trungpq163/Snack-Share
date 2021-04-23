import express, { Router } from 'express';
import { stripeWebhook } from '../controllers/webhook';

const router: Router = express.Router();

// Hook Point is https://snack-share.herokuapp.com/api/webhook OK
router.route('/webhook').post(stripeWebhook);

export default router;
