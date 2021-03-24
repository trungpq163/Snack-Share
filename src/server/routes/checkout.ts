import express, { Router } from 'express';
import passport from 'passport';
import { createCheckoutSession } from 'controllers/checkout';

const router: Router = express.Router();

router
    .route('/create-checkout-session')
    .post(passport.authenticate('jwt', { session: false }), createCheckoutSession);

export default router;
