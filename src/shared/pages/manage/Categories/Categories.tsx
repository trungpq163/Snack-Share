import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { useTranslation } from 'react-i18next';

import CategoriesContainer from '../../../containers/manage/CategoriesContainer/CategoriesContainer';

import { getCategory } from '../../../store/category/selectors';
import { getCategory as getCategoryEff } from '../../../store/category/effects';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const Categories = () => {
    const dispatch = useDispatch();
    const category = useSelector(getCategory);
    const { t } = useTranslation();

    React.useEffect(() => {
        dispatch(getCategoryEff());
    }, [dispatch]);

    return (
        <>
            <PageHeader title={`${t('breadcrumb.categoryManagement')}`} />
            {category?.loading ? (
                <CircleLoader />
            ) : (
                <CategoriesContainer loading={category.loading} category={category.category} />
            )}
        </>
    );
};

export default Categories;
