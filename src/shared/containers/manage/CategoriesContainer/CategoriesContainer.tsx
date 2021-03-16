import * as React from 'react';

import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

import Categories from '../../../components/manage/Categories/Categories';

const CategoriesContainer = ({ category, loading }: any) => {
    return <>{loading ? <CircleLoader /> : <Categories category={category} />}</>;
};

export default CategoriesContainer;
