import * as React from 'react';

import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

import ShowCategory from 'components/manage/ShowCategory/ShowCategory';

const ShowCategoryContainer = ({ category, loading }: any) => {
    return <>{loading ? <CircleLoader /> : <ShowCategory category={category} />}</>;
};

export default ShowCategoryContainer;
