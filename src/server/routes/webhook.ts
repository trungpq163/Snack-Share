import express, { Router } from 'express';
import { stripeWebhook } from 'controllers/webhook';

const router: Router = express.Router();

// Hook Point is https://snack-dev.herokuapp.com/api/webhook OK
router.route('/webhook').post(express.raw({ type: 'application/json' }), stripeWebhook);

export default router;
