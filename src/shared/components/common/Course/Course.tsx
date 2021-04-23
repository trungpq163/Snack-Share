/* eslint-disable camelcase */
import * as React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { isoDateToString } from '../../../utils/isoToString';
import { profileImage } from '../../../utils/imageURL';
import countRating from '../../../utils/countRating';

import RatingStar from '../RatingStar/RatingStar';

const Course = ({ col, course, isMyLearningRoute, enrollments, index, ratings }: any) => {
    const { t } = useTranslation();
    const handleNumberOfStudents = (id: string): number =>
        enrollments?.filter((enrollment: any) => enrollment?.course?._id === id)?.length;

    const numberOfStudents = `${handleNumberOfStudents(course._id)} ${t('courseCard.students')}`;
    const dateCreated = isoDateToString(course?.created_at);
    const courseRatings = course.ratings || ratings;

    return (
        <div className={`col-lg-${col}`} key={index}>
            <div className={`course-one__single color-${index}`}>
                <div className="course-one__image">
                    {!isMyLearningRoute ? (
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
                        <img src={profileImage().avt} alt="avt" />
                        {t('courseCard.by')}
                        <Link
                            to={`/user/${course?.instructor?._id}`}
                            /* eslint-disable-next-line camelcase */
                        >{`${course?.instructor?.first_name} ${course?.instructor?.last_name}`}</Link>
                    </div>
                    <h2 className="course-one__title">
                        {!isMyLearningRoute ? (
                            <Link to={`/course-details/${course?._id}`}>
                                {course?.courseName || ''}
                            </Link>
                        ) : (
                            <Link to={`/courses/${course?._id}`}>{course?.courseName || ''}</Link>
                        )}
                    </h2>
                    {Number(countRating(courseRatings)) === 0 ? (
                        <p style={{ color: '#81868a', fontSize: '0.8rem' }}>Chưa có đánh giá</p>
                    ) : (
                        <div className="course-one__stars">
                            <span className="course-one__stars-wrap">
                                <RatingStar countRating={Number(countRating(courseRatings))} />
                            </span>
                            <span className="course-one__count">{countRating(courseRatings)}</span>
                        </div>
                    )}

                    <div className="course-one__meta">
                        <a href="#">
                            <i className="far fa-clock" /> {dateCreated}
                        </a>
                        <a href="#">
                            <i className="fal fa-user" /> {numberOfStudents}
                        </a>
                        <a href="#">{course.price ? `${course.price}$` : '$Free'}</a>
                    </div>
                    {!isMyLearningRoute ? (
                        <Link to={`/course-details/${course?._id}`} className="course-one__link">
                            {t('courseCard.seeMore')}
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
