import * as React from 'react';

import { createSessionCheckout } from 'store/checkout/effect';
import { toastErrorNotify } from 'utils/toast';
import CourseDetails from 'components/course/CourseDetails/CourseDetails';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';
import stripePromise from 'utils/stripePromise';

interface Props {
    idCourse: string;
    courseDetails?: any;
    isAuthor: boolean;
    enrolled?: any;
    courses?: any;
    isAuth: any;
}

const CourseDetailsContainer = ({
    idCourse,
    courseDetails,
    isAuthor,
    enrolled,
    courses,
    isAuth,
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

    console.log('dataCourses', courseDetails);
    console.log('currentUser', isAuth);

    const redirectToSessionCheckout = async (_event: React.FormEvent<HTMLInputElement>) => {
        const stripe = await stripePromise;

        await createSessionCheckout(
            '/api/create-checkout-session',
            (err: string) => toastErrorNotify(err),
            (sessionId: string) =>
                stripe?.redirectToCheckout({
                    sessionId: sessionId,
                })
        );
    };

    return (
        <CourseDetails
            idCourse={idCourse}
            {...dataCourse}
            isAuthor={isAuthor}
            enrolled={enrolled}
            courses={courses}
            redirectToSessionCheckout={redirectToSessionCheckout}
        />
    );
};

export default CourseDetailsContainer;
