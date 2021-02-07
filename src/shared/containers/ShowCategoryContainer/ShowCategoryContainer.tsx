import * as React from 'react';

import CircleLoader from 'components/CircleLoader/CircleLoader';

import ShowCategory from 'components/ShowCategory/ShowCategory';

const ShowCategoryContainer = ({ category, loading }: any) => {
    return <>{loading ? <CircleLoader /> : <ShowCategory category={category} />}</>;
};

export default ShowCategoryContainer;
