import * as React from 'react';

import { useSelector } from 'react-redux';
import MyCoursesContainer from 'containers/course/MyCoursesContainer/MyCoursesContainer';
import PageHeader from 'components/layout/PageHeader/PageHeader';

import { getEnrollments } from 'store/enrollment/selectors';
import { getProfile } from 'store/profile/selectors';
import { getUsers } from 'store/users/selectors';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const MyCourses = () => {
    const courses = useSelector(getEnrollments);
    const profile = useSelector(getProfile);
    const users = useSelector(getUsers);
    const myCourses = courses?.enrollments?.filter(
        (x) => x?.student?._id === profile?.profile?.user?._id
    );

    console.log(users);
    return (
        <>
            <PageHeader title="My Courses" />
            {courses.loading || profile.loading || users.loading ? (
                <CircleLoader />
            ) : (
                <MyCoursesContainer courses={myCourses} />
            )}
        </>
    );
};

export default MyCourses;
