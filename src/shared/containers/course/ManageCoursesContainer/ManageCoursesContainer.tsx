import * as React from 'react';

import ManageCourses from 'components/course/ManageCourses/ManageCourses';

interface Props {
    idInstructor: string;
    courses: any;
}

const ManageCoursesContainer = ({ idInstructor, courses }: Props) => {
    return <ManageCourses idInstructor={idInstructor} courses={courses} />;
};

export default ManageCoursesContainer;
