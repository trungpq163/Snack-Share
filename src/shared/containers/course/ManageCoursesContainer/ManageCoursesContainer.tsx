import * as React from 'react';

import { useLocation } from 'react-router';
import ManageCourses from 'components/course/ManageCourses/ManageCourses';

const ManageCoursesContainer = () => {
    const location = useLocation();

    const pathName = location?.pathname || '';
    const pathNameHandle = pathName.split('/services/').join('');

    return <ManageCourses idInstructor={pathNameHandle} />;
};

export default ManageCoursesContainer;
