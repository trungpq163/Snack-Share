import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import { getCategory } from '../../../store/category/selectors';
import { getCategory as getCategoryEff } from '../../../store/category/effects';
import EditCategoryContainer from '../../../containers/manage/EditCategoryContainer/EditCategoryContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const EditCategory = () => {
    const dispatch = useDispatch();
    const category = useSelector(getCategory);
    const location = useLocation();
    const { t } = useTranslation();

    React.useEffect(() => {
        dispatch(getCategoryEff());
    }, [dispatch]);

    const pathName = location?.pathname || '';
    const categoryFilter = category.category.find((x: any) => pathName?.includes(x?._id));
    const pathNameHandle = pathName.split('/categories/edit/').join('');

    return (
        <>
            <PageHeader title={`${t('breadcrumb.editCategory')}`} />
            {category?.loading ? (
                <CircleLoader />
            ) : (
                <EditCategoryContainer
                    pathName={pathNameHandle}
                    loading={category.loading}
                    category={categoryFilter}
                />
            )}
        </>
    );
};

export default EditCategory;
