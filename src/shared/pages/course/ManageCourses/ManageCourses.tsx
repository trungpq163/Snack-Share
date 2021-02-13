import * as React from 'react';

import PageHeader from 'components/layout/PageHeader/PageHeader';
import ManageCoursesContainer from 'containers/course/ManageCoursesContainer/ManageCoursesContainer';

const ManageCourses = () => {
    return (
        <>
            <PageHeader title="Manage Courses" />
            <ManageCoursesContainer />
        </>
    );
};

export default ManageCourses;
