import * as React from 'react';
import { useLocation } from 'react-router-dom';
import Course from 'components/common/Course/Course';

interface Props {
    courses: any;
}

const MyCourses = ({ courses }: Props) => {
    console.log(courses);
    const location = useLocation();
    const isMyCourseRoute = location?.pathname?.includes('servicesforstudent');

    return (
        <div className="block__header">
            <section className="course-one course-page">
                <div className="container">
                    <div className="row">
                        {courses.length > 0
                            ? courses.map((course: any, index: number | string) =>
                                  courses.length === 1 ? (
                                      <Course
                                          key={index}
                                          col={6}
                                          course={course?.course}
                                          isMyCourseRoute={isMyCourseRoute}
                                      />
                                  ) : courses.length === 2 ? (
                                      <Course
                                          key={index}
                                          col={6}
                                          course={course?.course}
                                          isMyCourseRoute={isMyCourseRoute}
                                      />
                                  ) : (
                                      <Course
                                          key={index}
                                          col={4}
                                          course={course?.course}
                                          isMyCourseRoute={isMyCourseRoute}
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

export default MyCourses;
