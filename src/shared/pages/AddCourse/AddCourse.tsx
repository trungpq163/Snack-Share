import * as React from 'react';
import { useSelector } from 'react-redux';

import PageHeader from 'components/PageHeader/PageHeader';
import AddCourseContainer from 'containers/AddCourseContainer/AddCourseContainer';

import { getCategory } from 'store/category/selectors';

const AddCourse = () => {
    const category = useSelector(getCategory);

    return (
        <>
            <PageHeader title="Add Course" />
            <AddCourseContainer category={category.category} loading={category.loading} />
        </>
    );
};

export default AddCourse;
