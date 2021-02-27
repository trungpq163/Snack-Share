import * as React from 'react';

import CourseDetails from 'components/course/CourseDetails/CourseDetails';
import capitalizeFirstLetter from 'utils/capitalizeFirstLetter';

interface Props {
    idCourse: string;
    courseDetails?: any;
    isAuthor: boolean;
    enrolled?: any;
    courses?: any;
}

const CourseDetailsContainer = ({
    idCourse,
    courseDetails,
    isAuthor,
    enrolled,
    courses,
}: Props) => {
    const dataCourse = {
        id: courseDetails?._id,
        courseName: courseDetails?.courseName,
        courseDescription: courseDetails?.courseDescription,
        image: courseDetails?.image,
        language: capitalizeFirstLetter(courseDetails?.language || 'english'),
        price: courseDetails?.price || 0,
        skillLevel: capitalizeFirstLetter(courseDetails?.skillLevel || 'advanced'),
        // eslint-disable-next-line camelcase
        createdAt: courseDetails?.created_at,
        categoryData: courseDetails?.category,
        instructorData: courseDetails?.instructor,
    };
    console.log('dataCourses', courseDetails);
    return (
        <CourseDetails
            idCourse={idCourse}
            {...dataCourse}
            isAuthor={isAuthor}
            enrolled={enrolled}
            courses={courses}
        />
    );
};

export default CourseDetailsContainer;
