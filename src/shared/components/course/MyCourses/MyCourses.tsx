import * as React from 'react';
import Course from 'components/common/Course/Course';

interface Props {
    courses: any;
}

const MyCourses = ({ courses }: Props) => {
    console.log(courses);
    return (
        <div className="block__header">
            <section className="course-one course-page">
                <div className="container">
                    <div className="row">
                        {courses.length > 0
                            ? courses.map((course: any, index: number | string) =>
                                  courses.length === 1 ? (
                                      <Course key={index} col={6} course={course?.course} />
                                  ) : courses.length === 2 ? (
                                      <Course key={index} col={6} course={course?.course} />
                                  ) : (
                                      <Course key={index} col={4} course={course?.course} />
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
