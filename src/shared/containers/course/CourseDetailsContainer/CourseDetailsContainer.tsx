import * as React from 'react';

import CourseDetails from 'components/course/CourseDetails/CourseDetails';

interface Props {
    idCourse: string;
    courseDetails?: any;
    isAuthor: boolean;
}

const CourseDetailsContainer = ({ idCourse, courseDetails, isAuthor }: Props) => {
    const dataCourse = {
        id: courseDetails?._id,
        courseName: courseDetails?.courseName,
        courseDescription: courseDetails?.courseDescription,
        image: courseDetails?.image,
        // eslint-disable-next-line camelcase
        createdAt: courseDetails?.created_at,
        categoryData: courseDetails?.category,
        instructorData: courseDetails?.instructor,
    };
    return <CourseDetails idCourse={idCourse} {...dataCourse} isAuthor={isAuthor} />;
};

export default CourseDetailsContainer;
