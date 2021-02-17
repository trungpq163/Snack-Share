import * as React from 'react';

import MyCourses from 'components/course/MyCourses/MyCourses';

interface Props {
    courses: any;
}

const MyCoursesContainer = ({ courses }: Props) => {
    return <MyCourses courses={courses} />;
};

export default MyCoursesContainer;
