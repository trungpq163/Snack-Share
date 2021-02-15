import * as React from 'react';

import { useLocation } from 'react-router';
import { ToastContainer } from 'react-toastify';
import { useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import ManageCoursesContainer from 'containers/course/ManageCoursesContainer/ManageCoursesContainer';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import { getCourses } from 'store/courses/selectors';

const ManageCourses = () => {
    const location = useLocation();

    const pathName = location?.pathname || '';
    const idInstructor = pathName.split('/services/').join('');

    const course = useSelector(getCourses);
    const coursesByInstructor = course?.courses?.filter((x) => x?.instructor?._id === idInstructor);

    return (
        <>
            <PageHeader title="Manage Courses" />
            {course?.loading ? (
                <CircleLoader />
            ) : (
                <ManageCoursesContainer idInstructor={idInstructor} courses={coursesByInstructor} />
            )}
            <ToastContainer />
        </>
    );
};

export default ManageCourses;
