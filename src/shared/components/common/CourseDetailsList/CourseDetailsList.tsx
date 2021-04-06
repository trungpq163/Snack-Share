/* eslint-disable camelcase */
import * as React from 'react';
import { Link } from 'react-router-dom';

import ReactStar from '../../common/RatingStar/RatingStar';
import countRating from '../../../utils/countRating';

interface Props {
    courses: any;
}

const CourseDetailsList = ({ courses }: Props) => {
    console.log(courses);
    return (
        <div className="course-details__list">
            <h2 className="course-details__list-title">New Courses</h2>
            {courses.slice(0, 3).map((course: any, index: number) => (
                <div className="course-details__list-item" key={index}>
                    <div className="course-details__list-img">
                        <img
                            style={{
                                objectFit: 'cover',
                                objectPosition: '30% 80%',
                            }}
                            width={66}
                            height={66}
                            src={course?.image}
                            alt=""
                        />
                    </div>
                    <div className="course-details__list-content">
                        <Link
                            className="course-details__list-author"
                            to={`/user/${course?.instructor?._id}`}
                        >
                            by
                            <span>{`${course?.instructor?.first_name} ${course?.instructor?.last_name}`}</span>
                        </Link>

                        <h3>
                            <a href="#none">{course?.courseName}</a>
                        </h3>
                        {Number(countRating(course.ratings)) === 0 ? (
                            <p>Chưa có đánh giá</p>
                        ) : (
                            <div className="course-details__list-stars">
                                <ReactStar countRating={countRating(course.ratings)} />
                                <span>{`${countRating(course.ratings)}`}</span>
                            </div>
                        )}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default CourseDetailsList;
