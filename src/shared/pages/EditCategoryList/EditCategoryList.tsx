import * as React from 'react';
import { useSelector } from 'react-redux';
import { useLocation } from 'react-router-dom';
import CircleLoader from 'components/CircleLoader/CircleLoader';
import PageHeader from 'components/PageHeader/PageHeader';
import EditCategoryContainer from 'containers/EditCategoryContainer/EditCategoryContainer';

import { getCategory } from 'store/category/selectors';

const EditCategoryList = () => {
    const category = useSelector(getCategory);
    const location = useLocation();

    const pathName = location?.pathname || '';
    const categoryFilter = category.category.find((x: any) => pathName?.includes(x?._id));
    const pathNameHandle = pathName.split('/ShowCategoryList/edit/').join('');

    return (
        <>
            <PageHeader title="Edit Category" />
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

export default EditCategoryList;
