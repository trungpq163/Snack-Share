import * as React from 'react';
import { useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import CreateEnrollmentContainer from 'containers/manage/CreateEnrollmentContainer/CreateEnrollmentContainer';

import { getUsers } from 'store/users/selectors';
import { getCourses } from 'store/courses/selectors';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const CreateEnrollment = () => {
    const users = useSelector(getUsers);
    const courses = useSelector(getCourses);
    return (
        <>
            <PageHeader title="Create Enrollment" />
            {users.loading || courses.loading ? (
                <CircleLoader />
            ) : (
                <CreateEnrollmentContainer users={users.users} courses={courses.courses} />
            )}
        </>
    );
};

export default CreateEnrollment;
