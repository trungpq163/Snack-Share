import Stripe from 'stripe';

export const createCheckoutSessionService = (
    stripe: Stripe,
    paymentMethodTypes: any,
    lineItem: any,
    mode: any,
    successURL: string,
    cancelURL: string
) => {
    return stripe.checkout.sessions.create({
        payment_method_types: paymentMethodTypes,
        line_items: lineItem,
        mode: mode,
        success_url: successURL,
        cancel_url: cancelURL,
    });
};
