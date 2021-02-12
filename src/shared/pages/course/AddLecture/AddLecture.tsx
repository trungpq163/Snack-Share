import * as React from 'react';

import PageHeader from 'components/layout/PageHeader/PageHeader';
import AddLectureContainer from 'containers/course/AddLectureContainer/AddLectureContainer';

const AddLecture = () => {
    return (
        <>
            <PageHeader title="Add Lecture" />
            <AddLectureContainer />
        </>
    );
};

export default AddLecture;
