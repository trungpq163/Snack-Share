import * as React from 'react';
import { useSelector } from 'react-redux';
import CircleLoader from 'components/CircleLoader/CircleLoader';
import PageHeader from 'components/PageHeader/PageHeader';
import ShowCategoryContainer from 'containers/ShowCategoryContainer/ShowCategoryContainer';

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
