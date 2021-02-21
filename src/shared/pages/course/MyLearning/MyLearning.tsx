import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import MyLearningContainer from 'containers/course/MyLearningContainer/MyLearningContainer';
import { getEnrollments } from 'store/enrollment/selectors';
import { getAllEnrollments } from 'store/enrollment/effects';
import { getAuth } from 'store/auth/selectors';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const MyLearning = () => {
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
            <PageHeader title="My Learning" />
            {courses.loading ? (
                <CircleLoader />
            ) : (
                <MyLearningContainer courses={myCourse} enrollments={courses} />
            )}
        </>
    );
};

export default MyLearning;
