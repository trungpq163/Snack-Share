import * as React from 'react';

import { useHistory } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { toastErrorNotify, toastSuccessNotify } from '../../../utils/toast';
import CourseDetails from '../../../components/course/CourseDetails/CourseDetails';
import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter';
import stripePromise from '../../../utils/stripePromise';
import { createSessionCheckout } from '../../../store/checkout/effect';
import { addEnrollments, getAllEnrollments } from '../../../store/enrollment/effects';

interface Props {
    idCourse: string;
    courseDetails?: any;
    isAuthor: boolean;
    enrolled?: any;
    courses?: any;
    isNotAuth: boolean;
    studentId: string;
    ratings: any;
    user: any;
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
    user,
}: Props) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const [loading, setLoading] = React.useState(false);

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
        courseDetailRatings: courseDetails?.ratings,
    };

    const dataCourseForCheckout = {
        id: courseDetails?._id,
        courseName: courseDetails?.courseName,
        courseDescription: courseDetails?.courseDescription,
        image: courseDetails?.image,
        price: courseDetails?.price || 0,
    };

    const redirectToSessionCheckout = async (_event: React.FormEvent<HTMLInputElement>) => {
        setLoading(true);

        if (isNotAuth === true) {
            setLoading(false);
            await history.push('/login');
        } else {
            const stripe = await stripePromise;

            await createSessionCheckout(
                '/api/create-checkout-session',
                studentId,
                dataCourseForCheckout,
                (err: string) => toastErrorNotify(err),
                (sessionId: string) => {
                    setLoading(false);
                    return stripe?.redirectToCheckout({
                        sessionId: sessionId,
                    });
                }
            );
        }
    };

    const handleClickBuyFreeCourse = () => {
        setLoading(true);

        const dataEnrollment = {
            student: studentId,
            course: courseDetails?._id,
        };

        if (isNotAuth === true) {
            setLoading(false);
            history.push('/login');
        } else {
            dispatch(
                addEnrollments(
                    dataEnrollment,
                    (err: any) => toastErrorNotify(err),
                    (mess: string) => toastSuccessNotify(mess),
                    () => {
                        setLoading(false);
                        history.push('/my-courses/learning/');
                    },
                    () => dispatch(getAllEnrollments)
                )
            );
        }
    };

    return (
        <CourseDetails
            idCourse={idCourse}
            {...dataCourse}
            isAuthor={isAuthor}
            enrolled={enrolled}
            courses={courses}
            redirectToSessionCheckout={redirectToSessionCheckout}
            handleClickBuyFreeCourse={handleClickBuyFreeCourse}
            loading={loading}
            ratings={ratings}
            user={user}
        />
    );
};

export default CourseDetailsContainer;
