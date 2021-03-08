import * as React from 'react';

import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import stripePromise from 'utils/stripePromise';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import CourseDetailsContainer from 'containers/course/CourseDetailsContainer/CourseDetailsContainer';
import { getCourses } from 'store/courses/selectors';
import { getAllCourses } from 'store/courses/effects';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

import { getProfile } from 'store/profile/selectors';
import { getCurrentProfile } from 'store/profile/effects';
import { getEnrollments } from 'store/enrollment/selectors';
import { getAllEnrollments } from 'store/enrollment/effects';

const CourseDetail = () => {
    const location = useLocation();
    const dispatch = useDispatch();
    const pathName = location?.pathname || '';
    const idCourse = pathName.split('/course-details/').join('');

    const courses = useSelector(getCourses);
    const currentUser = useSelector(getProfile);
    const enrollments = useSelector(getEnrollments);

    React.useEffect(() => {
        dispatch(getAllCourses());
        dispatch(getCurrentProfile());
        dispatch(getAllEnrollments());
    }, [dispatch]);

    // @ts-ignore
    const courseDetails = courses?.courses?.find((x) => x?._id === idCourse);

    const isAuthor = courseDetails?.instructor?._id === currentUser?.profile?.user?._id;

    const enrolled = enrollments.enrollments?.find(
        (x) => x?.student?._id === currentUser?.profile?.user?._id && x?.course?._id === idCourse
    );

    return (
        <>
            {courses.loading || currentUser.loading || enrollments.loading ? (
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
                        stripePromise={stripePromise}
                    />
                </>
            )}
        </>
    );
};

export default CourseDetail;
