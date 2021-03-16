import * as React from 'react';

import { useLocation } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import { getCurrentProfile } from '../../../store/profile/effects';
import { getAllCourses } from '../../../store/courses/effects';
import { getProfile } from '../../../store/profile/selectors';
import { getCourses } from '../../../store/courses/selectors';
import AddLectureContainer from '../../../containers/course/AddLectureContainer/AddLectureContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';

const AddLecture = () => {
    const location = useLocation();

    const dispatch = useDispatch();
    const pathName = location?.pathname || '';
    const idCourse = pathName.split('/add-lecture/').join('');

    const data = useSelector(getCourses);
    // @ts-ignore
    const course = data?.courses?.find((x) => x?._id === idCourse);

    const currentUser = useSelector(getProfile);
    const isAuthor = course?.instructor?._id === currentUser?.profile?.user?._id;

    React.useEffect(() => {
        dispatch(getAllCourses());
        dispatch(getCurrentProfile());
    }, [dispatch]);

    return (
        <>
            {!isAuthor ? (
                <Redirect to="/" />
            ) : (
                <>
                    <PageHeader title="Add Lecture" />
                    {data.loading || currentUser.loading ? (
                        <CircleLoader />
                    ) : (
                        <AddLectureContainer
                            isAuthor={isAuthor}
                            currentUser={currentUser.profile}
                            course={course}
                        />
                    )}
                </>
            )}
        </>
    );
};

export default AddLecture;
