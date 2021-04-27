import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';
import { getCategory as getCategoryEff } from '../../../store/category/effects';
import { getCategory } from '../../../store/category/selectors';
import AddCourseContainer from '../../../containers/course/AddCourseContainer/AddCourseContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';

const AddCourse = () => {
    const dispatch = useDispatch();
    const { t } = useTranslation();
    const category = useSelector(getCategory);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    React.useEffect(() => {
        dispatch(getCategoryEff());
    }, [dispatch]);

    return (
        <>
            <PageHeader title={t('breadcrumb.addCourse')} />
            <AddCourseContainer category={category.category} loading={category.loading} />
        </>
    );
};

export default AddCourse;
