import * as React from 'react';

import { useLocation } from 'react-router';
import { ToastContainer, toast } from 'react-toastify';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import ManageCoursesContainer from 'containers/course/ManageCoursesContainer/ManageCoursesContainer';

import { getCoursesByInstructor } from 'store/courses/effects';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const ManageCourses = () => {
    const location = useLocation();

    const pathName = location?.pathname || '';
    const idInstructor = pathName.split('/services/').join('');
    const [courses, setCourses] = React.useState({});
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        const interval = setInterval(() => {
            setLoading(false);
        }, 500);

        return () => clearInterval(interval);
    }, []);

    React.useEffect(() => {
        getCoursesByInstructor(idInstructor)
            .then((data) => {
                setCourses(data);
            })
            .catch((err) => toast(err));
    }, [idInstructor]);

    console.log('course', courses);

    return (
        <>
            <PageHeader title="Manage Courses" />
            {loading ? (
                <CircleLoader />
            ) : (
                <ManageCoursesContainer idInstructor={idInstructor} courses={courses} />
            )}
            <ToastContainer />
        </>
    );
};

export default ManageCourses;
