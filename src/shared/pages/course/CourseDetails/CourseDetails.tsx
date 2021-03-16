import * as React from 'react';

import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import { getCourses } from '../../../store/courses/selectors';
import { getAllCourses } from '../../../store/courses/effects';

import { getProfile } from '../../../store/profile/selectors';
import { getCurrentProfile } from '../../../store/profile/effects';
import { getEnrollments } from '../../../store/enrollment/selectors';
import { getAllEnrollments } from '../../../store/enrollment/effects';
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

    React.useEffect(() => {
        dispatch(getAllCourses());
        dispatch(getCurrentProfile());
        dispatch(getAllEnrollments());
    }, [dispatch]);

    // @ts-ignore
    const courseDetails = courses?.courses?.find((x) => x?._id === idCourse);

    const isAuthor = courseDetails?.instructor?._id === currentUser?.profile?.user?._id;

    const isNotAuth =
        JSON.stringify(currentUser.profile) === JSON.stringify({}) ||
        JSON.stringify(currentUser.profile) === null;

    const enrolled = enrollments.enrollments?.find(
        (x) => x?.student?._id === currentUser?.profile?.user?._id && x?.course?._id === idCourse
    );
    console.log('1111', JSON.stringify(currentUser.profile));
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
                        isAuth={isNotAuth}
                    />
                </>
            )}
        </>
    );
};

export default CourseDetail;
