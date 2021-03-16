import { loadStripe } from '@stripe/stripe-js';
import key from '../../server/config/key';

const stripePromise = loadStripe(key.STRIPE_PUBLISHABLE_KEY);

export default stripePromise;
