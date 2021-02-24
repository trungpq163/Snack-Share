import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import PageHeader from 'components/layout/PageHeader/PageHeader';
import AddCourseContainer from 'containers/course/AddCourseContainer/AddCourseContainer';

import { getCategory } from 'store/category/selectors';
import { getCategory as getCategoryEff } from 'store/category/effects';

const AddCourse = () => {
    const dispatch = useDispatch();
    const category = useSelector(getCategory);

    React.useEffect(() => {
        dispatch(getCategoryEff());
    }, [dispatch]);

    return (
        <>
            <PageHeader title="Add Course" />
            <AddCourseContainer category={category.category} loading={category.loading} />
        </>
    );
};

export default AddCourse;
