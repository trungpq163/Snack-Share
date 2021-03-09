import express, { Router } from 'express';
import { createCheckoutSession } from 'controllers/checkout';

const router: Router = express.Router();

router.route('/create-checkout-session').post(createCheckoutSession);

export default router;
