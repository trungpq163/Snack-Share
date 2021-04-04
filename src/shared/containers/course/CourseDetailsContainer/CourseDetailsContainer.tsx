import * as React from 'react';

import { useHistory } from 'react-router-dom';

import { toastErrorNotify } from '../../../utils/toast';
import CourseDetails from '../../../components/course/CourseDetails/CourseDetails';
import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter';
import stripePromise from '../../../utils/stripePromise';
import { createSessionCheckout } from '../../../store/checkout/effect';

interface Props {
    idCourse: string;
    courseDetails?: any;
    isAuthor: boolean;
    enrolled?: any;
    courses?: any;
    isNotAuth: boolean;
    studentId: string;
    ratings: any;
}

const CourseDetailsContainer = ({
    idCourse,
    courseDetails,
    isAuthor,
    enrolled,
    courses,
    isNotAuth,
    studentId,
    ratings,
}: Props) => {
    const history = useHistory();
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

    const redirectToSessionCheckout = async (_event: React.FormEvent<HTMLInputElement>) => {
        if (isNotAuth === true) {
            await history.push('/login');
        } else {
            const stripe = await stripePromise;

            await createSessionCheckout(
                '/api/create-checkout-session',
                studentId,
                dataCourse,
                (err: string) => toastErrorNotify(err),
                (sessionId: string) =>
                    stripe?.redirectToCheckout({
                        sessionId: sessionId,
                    })
            );
        }
    };

    console.log('dataCourse', dataCourse);

    return (
        <CourseDetails
            idCourse={idCourse}
            {...dataCourse}
            isAuthor={isAuthor}
            enrolled={enrolled}
            courses={courses}
            redirectToSessionCheckout={redirectToSessionCheckout}
            ratings={ratings}
        />
    );
};

export default CourseDetailsContainer;
