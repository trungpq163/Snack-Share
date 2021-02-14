import * as React from 'react';

import PageHeader from 'components/layout/PageHeader/PageHeader';
import CourseDetailsContainer from 'containers/course/CourseDetailsContainer/CourseDetailsContainer';

const CourseDetail = () => {
    return (
        <>
            <PageHeader title="Course Detail" />
            <CourseDetailsContainer />
        </>
    );
};

export default CourseDetail;
