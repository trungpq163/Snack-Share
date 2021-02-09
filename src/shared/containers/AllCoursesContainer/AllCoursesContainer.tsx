import * as React from 'react';

import AllCourses from 'components/AllCourses/AllCourses';
import CircleLoader from 'components/CircleLoader/CircleLoader';

const AllCoursesContainer = ({ courses, loading }: any) => {
    return <>{loading ? <CircleLoader /> : <AllCourses courses={courses} />}</>;
};

export default AllCoursesContainer;
