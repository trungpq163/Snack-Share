import * as React from 'react';

import { Stripe } from '@stripe/stripe-js';
import { toastErrorNotify } from 'utils/toast';
import CourseDetails from 'components/course/CourseDetails/CourseDetails';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

interface Props {
    idCourse: string;
    courseDetails?: any;
    isAuthor: boolean;
    enrolled?: any;
    courses?: any;
    stripePromise: Promise<Stripe | null>;
}

const CourseDetailsContainer = ({
    idCourse,
    courseDetails,
    isAuthor,
    enrolled,
    courses,
    stripePromise,
}: Props) => {
    const dataCourse = {
        id: courseDetails?._id,
        courseName: courseDetails?.courseName,
        courseDescription: courseDetails?.courseDescription,
        image: courseDetails?.image,
        language: capitalizeFirstLetter(courseDetails?.language || 'english'),
        price: courseDetails?.price || 0,
        skillLevel: capitalizeFirstLetter(courseDetails?.skillLevel || 'advanced'),
        // eslint-disable-next-line camelcase
        createdAt: courseDetails?.created_at,
        categoryData: courseDetails?.category,
        instructorData: courseDetails?.instructor,
    };

    const clickCheckout = async () => {
        const stripe = await stripePromise;
        const response = await fetch('/api/checkout', {
            method: 'POST',
        });
        const session = await response.json();
        // When the customer clicks on the button, redirect them to Checkout.
        const result = await stripe?.redirectToCheckout({
            sessionId: session.id,
        });
        if ((result as any).error) {
            // If `redirectToCheckout` fails due to a browser or network
            // error, display the localized error message to your customer
            // using `result.error.message`.
            toastErrorNotify(result?.error.message || '');
        }
    };

    console.log('dataCourses', courseDetails);
    return (
        <CourseDetails
            idCourse={idCourse}
            {...dataCourse}
            isAuthor={isAuthor}
            enrolled={enrolled}
            courses={courses}
            clickCheckout={clickCheckout}
        />
    );
};

export default CourseDetailsContainer;
