import * as React from 'react';

import { useLocation } from 'react-router';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router-dom';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import AddLectureContainer from 'containers/course/AddLectureContainer/AddLectureContainer';
import { getCourses } from 'store/courses/selectors';
import { getProfile } from 'store/profile/selectors';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const AddLecture = () => {
    const location = useLocation();

    const pathName = location?.pathname || '';
    const idCourse = pathName.split('/add-lecture/').join('');

    const data = useSelector(getCourses);
    // @ts-ignore
    const course = data?.courses?.find((x) => x?._id === idCourse);

    const currentUser = useSelector(getProfile);
    const isAuthor = course?.instructor?._id === currentUser?.profile?.user?._id;

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