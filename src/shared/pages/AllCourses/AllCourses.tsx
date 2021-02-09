import * as React from 'react';

import PageHeader from 'components/PageHeader/PageHeader';
import AllCoursesContainer from 'containers/AllCoursesContainer/AllCoursesContainer';

const AllCourses = () => {
    return (
        <>
            <PageHeader title="Courses" />
            <AllCoursesContainer />
        </>
    );
};

export default AllCourses;
