import * as React from 'react';
import MyLearning from '../../../components/course/MyLearning/MyLearning';

interface Props {
    courses: any;
    enrollments?: any;
}

const MyLearningContainer = ({ courses, enrollments }: Props) => {
    return <MyLearning courses={courses} enrollments={enrollments?.enrollments} />;
};

export default MyLearningContainer;
