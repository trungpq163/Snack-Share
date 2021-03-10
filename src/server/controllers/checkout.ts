import { Request, Response } from 'express';
import stripe from 'config/stripe';

import { createCheckoutSessionService } from 'services/checkout';

import key from 'config/key';

export const createCheckoutSession = async (req: Request, res: Response) => {
    try {
        const session = await createCheckoutSessionService(
            stripe,
            ['card'],
            [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: 'Stubborn Attachments',
                            images: ['https://i.imgur.com/EHyR2nP.png'],
                        },
                        unit_amount: 2000,
                    },
                    quantity: 1,
                },
            ],
            'payment',
            `${key.DOMAIN_NAME}?success=true`,
            `${key.DOMAIN_NAME}?canceled=true`
        );
        res.json({ id: session.id });
    } catch (err) {
        res.status(500).json(err);
    }
};
