import * as React from 'react';

import { useSelector } from 'react-redux';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import CreateEnrollAdminContainer from 'containers/manage/CreateEnrollAdminContainer/CreateEnrollAdminContainer';

import { getUsers } from 'store/users/selectors';
import { getCourses } from 'store/courses/selectors';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const CreateEnrollAdmin = () => {
    const users = useSelector(getUsers);
    const courses = useSelector(getCourses);

    return (
        <>
            <PageHeader title="Create Enroll" />
            {users.loading || courses.loading ? (
                <CircleLoader />
            ) : (
                <CreateEnrollAdminContainer users={users.users} courses={courses.courses} />
            )}
        </>
    );
};

export default CreateEnrollAdmin;
