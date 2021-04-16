import * as React from 'react';

import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';
import { dispatchSetCurrentUser } from '../../../store/auth/effects';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import { getCourses } from '../../../store/courses/selectors';
import { getAllCourses } from '../../../store/courses/effects';

import { getAuth } from '../../../store/auth/selectors';
import { getProfile } from '../../../store/profile/selectors';
import { getCurrentProfile } from '../../../store/profile/effects';
import { getEnrollments } from '../../../store/enrollment/selectors';
import { getAllEnrollments } from '../../../store/enrollment/effects';
import { getAllRatingsByIDCourse } from '../../../store/ratings/effects';
import { getRatingsByIDCourse } from '../../../store/ratings/selectors';
import CourseDetailsContainer from '../../../containers/course/CourseDetailsContainer/CourseDetailsContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';

const CourseDetail = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const pathName = location?.pathname || '';
    const idCourse = pathName.split('/course-details/').join('');

    const courses = useSelector(getCourses);
    const currentUser = useSelector(getProfile);
    const enrollments = useSelector(getEnrollments);
    const ratings = useSelector(getRatingsByIDCourse);
    const auth = useSelector(getAuth);

    React.useEffect(() => {
        dispatch(getAllCourses());
        if (localStorage.jwtToken) {
            dispatch(getCurrentProfile());
        }
        dispatch(getAllEnrollments());
    }, [dispatch]);

    React.useEffect(() => {
        dispatch(getAllRatingsByIDCourse(idCourse));
    }, [idCourse, dispatch]);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            const decoded = jwtDecode(localStorage.jwtToken);
            dispatch(dispatchSetCurrentUser(decoded));
        }
    }, [dispatch]);

    // @ts-ignore
    const courseDetails = courses?.courses?.find((x) => x?._id === idCourse);

    const isAuthor = courseDetails?.instructor?._id === auth?.users?.id;

    const isNotAuth =
        JSON.stringify(currentUser.profile) === JSON.stringify({}) ||
        JSON.stringify(currentUser) ===
            JSON.stringify({ profile: null, profiles: null, loading: false }) ||
        JSON.stringify(currentUser.profile) === null ||
        localStorage.getItem('userid') === null;

    const enrolled = enrollments.enrollments?.find(
        (x) => x?.student?._id === auth?.users?.id && x?.course?._id === idCourse
    );

    return (
        <>
            {courses.loading ||
            currentUser.loading ||
            enrollments.loading ||
            ratings.loading ||
            auth.loading ? (
                <>
                    <PageHeader title="Loading............." />
                    <CircleLoader />
                </>
            ) : (
                <>
                    <PageHeader title={courseDetails?.courseName} />
                    <CourseDetailsContainer
                        idCourse={idCourse}
                        courseDetails={courseDetails}
                        courses={courses.courses}
                        isAuthor={isAuthor}
                        enrolled={enrolled}
                        isNotAuth={isNotAuth}
                        user={auth.users}
                        studentId={auth.users.id || ''}
                        ratings={ratings.ratings}
                    />
                </>
            )}
        </>
    );
};

export default CourseDetail;
