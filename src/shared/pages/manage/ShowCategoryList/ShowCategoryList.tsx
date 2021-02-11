import * as React from 'react';
import { useSelector } from 'react-redux';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import ShowCategoryContainer from 'containers/manage/ShowCategoryContainer/ShowCategoryContainer';

import { getCategory } from 'store/category/selectors';

const ShowCategoryList = () => {
    const category = useSelector(getCategory);
    return (
        <>
            <PageHeader title="Category List" />
            {category?.loading ? (
                <CircleLoader />
            ) : (
                <ShowCategoryContainer loading={category.loading} category={category.category} />
            )}
        </>
    );
};

export default ShowCategoryList;
