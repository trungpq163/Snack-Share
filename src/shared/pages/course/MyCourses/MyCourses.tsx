import * as React from 'react';

import { useDispatch, useSelector } from 'react-redux';
import MyCoursesContainer from 'containers/course/MyCoursesContainer/MyCoursesContainer';
import PageHeader from 'components/layout/PageHeader/PageHeader';

import { getEnrollments } from 'store/enrollment/selectors';
import { getAllEnrollments } from 'store/enrollment/effects';
import { getAuth } from 'store/auth/selectors';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const MyCourses = () => {
    const courses = useSelector(getEnrollments);
    const currentUser = useSelector(getAuth);
    const [myCourse, setMyCourse] = React.useState([]);
    const dispatch = useDispatch();

    React.useEffect(() => {
        dispatch(getAllEnrollments());
    }, [dispatch]);

    React.useEffect(() => {
        setMyCourse(
            courses?.enrollments?.filter((x) => x?.student?._id === currentUser?.users?.id) as any
        );
    }, [courses, currentUser]);

    return (
        <>
            <PageHeader title="My Courses" />
            {courses.loading ? (
                <CircleLoader />
            ) : (
                <MyCoursesContainer courses={myCourse} enrollments={courses} />
            )}
        </>
    );
};

export default MyCourses;
