import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { getCategory as getCategoryEff } from '../../../store/category/effects';
import { getCategory } from '../../../store/category/selectors';
import AddCourseContainer from '../../../containers/course/AddCourseContainer/AddCourseContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';

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
