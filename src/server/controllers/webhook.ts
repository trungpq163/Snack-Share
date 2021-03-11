import { Request, Response } from 'express';
import enrollmentModel from '../models/Enrollment';

import { saveEnrollmentService } from '../services/enrollment';

export const stripeWebhook = (req: Request, res: Response) => {
    const event = req.body;
    // Handle the event
    switch (event.type) {
        case 'payment_intent.succeeded': {
            const paymentIntent = event.data.object;
            console.log(`PaymentIntent for ${paymentIntent.amount} was successful!`);
            // Then define and call a method to handle the successful payment intent.
            // handlePaymentIntentSucceeded(paymentIntent);
            // console.log(`Req body ${paymentIntent.id}`);
            console.log(`Description ${paymentIntent.description}`);
            const studentId = paymentIntent.description.split('/')[0];
            const courseId = paymentIntent.description.split('/')[1];

            const model = new enrollmentModel({
                student: studentId,
                course: courseId,
            });
            saveEnrollmentService(model);
            break;
        }
        case 'payment_method.attached': {
            const paymentMethod = event.data.object;
            // Then define and call a method to handle the successful attachment of a PaymentMethod.
            // handlePaymentMethodAttached(paymentMethod);
            console.log(paymentMethod);
            break;
        }
        default: {
            // Unexpected event type
            console.log(`Unhandled event type ${event.type}.`);
        }
    }
    // Return a 200 response to acknowledge receipt of the event
    res.sendStatus(200);
};
