import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';
import jwtDecode from 'jwt-decode';
import { getCourses } from '../../../store/courses/selectors';
import { getAuth } from '../../../store/auth/selectors';
import { dispatchSetCurrentUser } from '../../../store/auth/effects';
import { getEnrollments } from '../../../store/enrollment/selectors';
import { getAllCourses } from '../../../store/courses/effects';
import { getAllEnrollments } from '../../../store/enrollment/effects';
import MyCoursesContainer from '../../../containers/course/MyCoursesContainer/MyCoursesContainer';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';

const MyCourses = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const currentUser = useSelector(getAuth);
    const course = useSelector(getCourses);
    const enrollments = useSelector(getEnrollments);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    React.useEffect(() => {
        dispatch(getAllCourses());
        dispatch(getAllEnrollments());
    }, [dispatch]);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            const decoded = jwtDecode(localStorage.jwtToken);
            dispatch(dispatchSetCurrentUser(decoded));
        }
    }, [dispatch]);

    const coursesByInstructor = course?.courses?.filter(
        (x) => x?.instructor?._id === currentUser?.users?.id
    );

    return (
        <>
            <PageHeader title={`${t('breadcrumb.myCourses')}`} />
            {course?.loading || enrollments?.loading ? (
                <CircleLoader />
            ) : (
                <MyCoursesContainer
                    idInstructor={currentUser?.users?.id}
                    enrollments={enrollments?.enrollments}
                    courses={coursesByInstructor}
                />
            )}
        </>
    );
};

export default MyCourses;
