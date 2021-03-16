import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import CategoriesContainer from '../../../containers/manage/CategoriesContainer/CategoriesContainer';

import { getCategory } from '../../../store/category/selectors';
import { getCategory as getCategoryEff } from '../../../store/category/effects';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const Categories = () => {
    const dispatch = useDispatch();
    const category = useSelector(getCategory);

    React.useEffect(() => {
        dispatch(getCategoryEff());
    }, [dispatch]);

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
