import * as React from 'react';

import { ToastContainer } from 'react-toastify';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import MyCoursesContainer from 'containers/course/MyCoursesContainer/MyCoursesContainer';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import { getCourses } from 'store/courses/selectors';
import { getAuth } from 'store/auth/selectors';
import { getEnrollments } from 'store/enrollment/selectors';
import { getAllCourses } from 'store/courses/effects';
import { getAllEnrollments } from 'store/enrollment/effects';

const MyCourses = () => {
    const dispatch = useDispatch();
    const currentUser = useSelector(getAuth);
    const course = useSelector(getCourses);
    const enrollments = useSelector(getEnrollments);

    React.useEffect(() => {
        dispatch(getAllCourses());
        dispatch(getAllEnrollments());
    }, [dispatch]);

    const coursesByInstructor = course?.courses?.filter(
        (x) => x?.instructor?._id === currentUser?.users?.id
    );

    return (
        <>
            <PageHeader title="My Courses" />
            {course?.loading || enrollments?.loading ? (
                <CircleLoader />
            ) : (
                <MyCoursesContainer
                    idInstructor={currentUser?.users?.id}
                    enrollments={enrollments?.enrollments}
                    courses={coursesByInstructor}
                />
            )}
            <ToastContainer />
        </>
    );
};

export default MyCourses;
