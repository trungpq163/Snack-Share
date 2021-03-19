import { Request, Response } from 'express';
import stripe from 'config/stripe';

import { createCheckoutSessionService } from 'services/checkout';

import key from 'config/key';

export const createCheckoutSession = async (req: Request, res: Response) => {
    const { studentId, course } = req.body;
    try {
        const session = await createCheckoutSessionService(
            stripe,
            ['card'],
            [
                {
                    price_data: {
                        currency: 'usd',
                        product_data: {
                            name: course.courseName,
                            images: [course.image],
                        },
                        unit_amount: course.price,
                    },
                    quantity: 1,
                },
            ],
            'payment',
            `${key.DOMAIN_NAME}?success=true`,
            `${key.DOMAIN_NAME}?canceled=true`,
            `${!(studentId && course) ? '' : `${studentId + '/' + course.id}`}`
        );
        res.json({ id: session.id });
    } catch (err) {
        res.status(500).json(err);
    }
};
