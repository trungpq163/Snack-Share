import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useTranslation } from 'react-i18next';

import { getAllCourses } from '../../../store/courses/effects';
import { getAllEnrollments } from '../../../store/enrollment/effects';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import { getEnrollments } from '../../../store/enrollment/selectors';
import { getCourses } from '../../../store/courses/selectors';
import AllCoursesContainer from '../../../containers/course/AllCoursesContainer/AllCoursesContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';

const AllCourses = () => {
    const dispatch = useDispatch();
    const courses = useSelector(getCourses);
    const enrollments = useSelector(getEnrollments);
    const { t } = useTranslation();

    React.useEffect(() => {
        dispatch(getAllCourses());
        dispatch(getAllEnrollments());
    }, [dispatch]);

    return (
        <>
            <PageHeader title={`${t('breadcrumb.allCourse')}`} />
            {courses.loading || enrollments.loading ? (
                <CircleLoader />
            ) : (
                <AllCoursesContainer
                    courses={courses.courses}
                    enrollments={enrollments?.enrollments}
                />
            )}
        </>
    );
};

export default AllCourses;
