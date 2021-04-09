import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Course from '../../../components/common/Course/Course';

interface Props {
    courses: any;
    enrollments: any;
}

const MyLearning = ({ courses, enrollments }: Props) => {
    const location = useLocation();
    const isMyLearningRoute = location?.pathname?.includes('/my-courses/learning/');
    console.log('course at mylearning2', courses);
    return (
        <div className="block__header">
            <section className="course-one course-page">
                <div className="container">
                    <div className="row">
                        {courses?.length > 0
                            ? courses.map((course: any, index: number | string) =>
                                  courses.length === 1 ? (
                                      <Course
                                          index={index}
                                          col={6}
                                          course={course?.course}
                                          key={index}
                                          enrollments={enrollments}
                                          isMyLearningRoute={isMyLearningRoute}
                                          ratings={course.ratings}
                                      />
                                  ) : courses.length === 2 ? (
                                      <Course
                                          index={index}
                                          col={6}
                                          key={index}
                                          course={course?.course}
                                          enrollments={enrollments}
                                          isMyLearningRoute={isMyLearningRoute}
                                          ratings={course.ratings}
                                      />
                                  ) : (
                                      <Course
                                          index={index}
                                          col={4}
                                          course={course?.course}
                                          key={index}
                                          enrollments={enrollments}
                                          isMyLearningRoute={isMyLearningRoute}
                                          ratings={course.ratings}
                                      />
                                  )
                              )
                            : ''}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default MyLearning;
