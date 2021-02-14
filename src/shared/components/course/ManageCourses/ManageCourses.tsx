import * as React from 'react';
import { Link } from 'react-router-dom';
import Course from 'components/common/Course/Course';
import '../../manage/ShowCategory/ShowCategory.Styles.css';

interface Props {
    idInstructor: string;
    courses: any;
}

const ManageCourses = ({ idInstructor, courses }: Props) => {
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <Link
                    className="link-action__category"
                    style={{ fontSize: '1.66rem', cursor: 'pointer' }}
                    to={`/addcourse/${idInstructor}`}
                >
                    Add Course
                </Link>
            </div>
            <section
                className="course-one course-page"
                style={{
                    paddingTop: '1rem',
                    paddingBottom: '1rem',
                }}
            >
                <div className="container">
                    <div className="row">
                        {courses?.length > 0
                            ? courses?.map((course: any[], index: number | string) =>
                                  courses?.length === 1 ? (
                                      <Course key={index} col={6} course={course} />
                                  ) : courses?.length === 2 ? (
                                      <Course key={index} col={6} course={course} />
                                  ) : (
                                      <Course key={index} col={4} course={course} />
                                  )
                              )
                            : ''}
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ManageCourses;
