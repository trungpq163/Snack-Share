import * as React from 'react';
import { Link } from 'react-router-dom';

import team1 from '../../../assets/images/team-1-1.jpg';

const Course = ({ col, course }: any) => {
    return (
        <div className={`col-lg-${col}`}>
            <div className="course-one__single">
                <div className="course-one__image">
                    <img src={course?.image} alt="" />
                    <i className="far fa-heart" />
                </div>
                <div className="course-one__content">
                    <a href="#none" className="course-one__category">
                        {course?.category?.categoryName}
                    </a>
                    <div className="course-one__admin">
                        <img src={team1} alt="" />
                        by
                        <Link
                            to={'/teacher-details'}
                            /* eslint-disable-next-line camelcase */
                        >{`${course?.instructor?.first_name} ${course?.instructor?.last_name}`}</Link>
                    </div>
                    <h2 className="course-one__title">
                        <Link to={`/course-details/${course?._id}`}>
                            {course?.courseName || ''}
                        </Link>
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
                        <span className="course-one__stars-count">250</span>
                    </div>
                    <div className="course-one__meta">
                        <a href="/course-details">
                            <i className="far fa-clock" /> 10 Hours
                        </a>
                        <a href="/course-details">
                            <i className="far fa-folder-open" /> 6 Lectures
                        </a>
                        <a href="/course-details">$Free</a>
                    </div>
                    <a href="#none" className="course-one__link">
                        See Preview
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Course;
