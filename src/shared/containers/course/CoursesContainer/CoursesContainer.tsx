import * as React from 'react';

import Courses from 'components/course/Courses/Courses';

interface Props {
    lectures?: any;
    pathName?: string;
}

const CoursesContainer = ({ lectures, pathName }: Props) => {
    return (
        <Courses lectures={lectures?.lectures} loading={lectures?.loading} pathName={pathName} />
    );
};

export default CoursesContainer;
