import * as React from 'react';
import { Link } from 'react-router-dom';

import avt from '../../../assets/images/avt.jpg';

const Course = ({ col, course, isMyCourseRoute, enrollments }: any) => {
    const handleNumberOfStudents = (id: string): number =>
        enrollments?.filter((enrollment: any) => enrollment?.course?._id === id)?.length;

    const numberOfStudents = `${handleNumberOfStudents(course._id)} students`;

    return (
        <div className={`col-lg-${col}`}>
            <div className="course-one__single">
                <div className="course-one__image">
                    {!isMyCourseRoute ? (
                        <Link to={`/course-details/${course?._id}`}>
                            <img src={course?.image} alt="" />
                        </Link>
                    ) : (
                        <Link to={`/courses/${course?._id}`}>
                            <img src={course?.image} alt="" />
                        </Link>
                    )}
                    <i className="far fa-heart" />
                </div>
                <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                        {course?.category?.categoryName}
                    </a>
                    <div className="course-one__admin">
                        <img src={avt} alt="" />
                        by
                        <Link
                            to={'/teacher-details'}
                            /* eslint-disable-next-line camelcase */
                        >{`${course?.instructor?.first_name} ${course?.instructor?.last_name}`}</Link>
                    </div>
                    <h2 className="course-one__title">
                        {!isMyCourseRoute ? (
                            <Link to={`/course-details/${course?._id}`}>
                                {course?.courseName || ''}
                            </Link>
                        ) : (
                            <Link to={`/courses/${course?._id}`}>{course?.courseName || ''}</Link>
                        )}
                    </h2>
                    <div className="course-one__stars">
                        <span className="course-one__stars-wrap">
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                            <i className="fa fa-star" />
                        </span>
                        <span className="course-one__count">4.8</span>
                    </div>
                    <div className="course-one__meta">
                        <a href="/course-details">
                            <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                            <i className="fal fa-user" /> {numberOfStudents}
                        </a>
                        <a href="/course-details">$Free</a>
                    </div>
                    {!isMyCourseRoute ? (
                        <Link to="#none" className="course-one__link">
                            See Preview
                        </Link>
                    ) : (
                        <Link to={`/courses/${course?._id}`} className="course-one__link">
                            Study Now
                        </Link>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Course;
