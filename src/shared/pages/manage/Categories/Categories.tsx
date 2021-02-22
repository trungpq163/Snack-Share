import * as React from 'react';
import { useSelector } from 'react-redux';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import PageHeader from 'components/layout/PageHeader/PageHeader';

import CategoriesContainer from 'containers/manage/CategoriesContainer/CategoriesContainer';

import { getCategory } from 'store/category/selectors';

const Categories = () => {
    const category = useSelector(getCategory);
    return (
        <>
            <PageHeader title="Category List" />
            {category?.loading ? (
                <CircleLoader />
            ) : (
                <CategoriesContainer loading={category.loading} category={category.category} />
            )}
        </>
    );
};

export default Categories;
