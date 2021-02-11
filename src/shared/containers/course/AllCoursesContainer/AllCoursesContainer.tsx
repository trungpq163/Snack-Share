import * as React from 'react';

import AllCourses from 'components/course/AllCourses/AllCourses';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

const AllCoursesContainer = ({ courses, loading }: any) => {
    return <>{loading ? <CircleLoader /> : <AllCourses courses={courses} />}</>;
};

export default AllCoursesContainer;
