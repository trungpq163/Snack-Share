import Stripe from 'stripe';
import key from './key';

const stripe = new Stripe(key.STRIPE_SECRET_KEY, {
    apiVersion: '2020-08-27',
    typescript: true,
});

export default stripe;
