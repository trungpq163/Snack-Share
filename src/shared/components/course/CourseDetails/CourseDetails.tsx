/* eslint-disable camelcase */
import * as React from 'react';

import { Link } from 'react-router-dom';
import lcImage1 from '../../../assets/images/lc-1-1.jpg';
import lcImage2 from '../../../assets/images/lc-1-2.jpg';
import lcImage3 from '../../../assets/images/lc-1-3.jpg';

import avt from '../../../assets/images/avt.jpg';
import team2 from '../../../assets/images/team-1-2.jpg';

const CourseDetails = ({
    idCourse,
    courseName,
    image,
    courseDescription,
    categoryData,
    instructorData,
    isAuthor,
    enrolled,
    courses,
}: any) => {
    console.log('courses', courses);
    return (
        <section className="course-details">
            <div className="container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="course-details__content">
                            <p className="course-details__author">
                                <img src={avt} alt="" />
                                by{' '}
                                <a href="#none">{`${instructorData?.first_name} ${instructorData?.last_name}`}</a>
                            </p>

                            <div className="course-details__top">
                                <div className="course-details__top-left">
                                    <h2 className="course-details__title">{courseName || ''}</h2>
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
                                </div>
                                <div className="course-details__top-right">
                                    <a href="#none" className="course-one__category">
                                        {categoryData?.categoryName || ''}
                                    </a>
                                </div>
                            </div>
                            <div className="course-one__image">
                                <img src={image} alt="" />
                                <i className="far fa-heart" />
                            </div>

                            <ul className="course-details__tab-navs list-unstyled nav nav-tabs">
                                <li>
                                    <a
                                        className="active"
                                        role="tab"
                                        data-toggle="tab"
                                        href="#overview"
                                    >
                                        Overview
                                    </a>
                                </li>
                                <li>
                                    <a className="" role="tab" data-toggle="tab" href="#curriculum">
                                        Curriculum
                                    </a>
                                </li>
                                <li>
                                    <a className="" role="tab" data-toggle="tab" href="#review">
                                        Reviews
                                    </a>
                                </li>
                            </ul>
                            <div className="tab-content course-details__tab-content ">
                                <div
                                    className="tab-pane show active  animated fadeInUp"
                                    role="tabpanel"
                                    id="overview"
                                >
                                    <p className="course-details__tab-text">
                                        {courseDescription || ''}
                                    </p>
                                </div>
                                <div
                                    className="tab-pane  animated fadeInUp"
                                    role="tabpanel"
                                    id="curriculum"
                                >
                                    <h3 className="course-details__tab-title">
                                        Starting beginners level course
                                    </h3>
                                    <br />
                                    <p className="course-details__tab-text">
                                        Aelltes port lacus quis enim var sed efficitur turpis gilla
                                        sed sit Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry’s
                                        standard dummy text ever since.
                                    </p>
                                    <br />
                                    <ul className="course-details__curriculum-list list-unstyled">
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                <div className="course-details__meta-icon video-icon">
                                                    <i className="fas fa-play" />
                                                </div>
                                                <a href="#none">Introduction to Editing</a>{' '}
                                                <span>Preview</span>
                                            </div>
                                            <div className="course-details__curriculum-list-right">
                                                16 minutes
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                <div className="course-details__meta-icon video-icon">
                                                    <i className="fas fa-play" />
                                                </div>
                                                <a href="#none">Overview of Editing</a>{' '}
                                                <span>Preview</span>
                                            </div>
                                            <div className="course-details__curriculum-list-right">
                                                10 minutes
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                <div className="course-details__meta-icon file-icon">
                                                    <i className="fas fa-folder" />
                                                </div>
                                                <a href="#none">Basic Editing Technology</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                <div className="course-details__meta-icon quiz-icon">
                                                    <i className="fas fa-comment" />
                                                </div>
                                                <a href="#none">Quiz</a>
                                            </div>
                                            <div className="course-details__curriculum-list-right">
                                                6 questions
                                            </div>
                                        </li>
                                    </ul>
                                    <br />
                                    <br />
                                    <h3 className="course-details__tab-title">
                                        Intermediate Level
                                    </h3>
                                    <br />
                                    <p className="course-details__tab-text">
                                        Aelltes port lacus quis enim var sed efficitur turpis gilla
                                        sed sit Lorem Ipsum is simply dummy text of the printing and
                                        typesetting industry. Lorem Ipsum has been the industry’s
                                        standard dummy text ever since.
                                    </p>
                                    <br />
                                    <ul className="course-details__curriculum-list list-unstyled">
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                <div className="course-details__meta-icon video-icon">
                                                    <i className="fas fa-play" />
                                                </div>
                                                <a href="#none">Introduction to Editing</a>
                                                <span>Preview</span>
                                            </div>
                                            <div className="course-details__curriculum-list-right">
                                                16 minutes
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                <div className="course-details__meta-icon file-icon">
                                                    <i className="fas fa-folder" />
                                                </div>
                                                <a href="#none">Basic Editing Technology</a>
                                            </div>
                                        </li>
                                        <li>
                                            <div className="course-details__curriculum-list-left">
                                                <div className="course-details__meta-icon quiz-icon">
                                                    <i className="fas fa-comment" />
                                                </div>
                                                <a href="#none">Quiz</a>
                                            </div>
                                            <div className="course-details__curriculum-list-right">
                                                6 questions
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                                <div
                                    className="tab-pane  animated fadeInUp"
                                    role="tabpanel"
                                    id="review"
                                >
                                    <div className="row">
                                        <div className="col-xl-7 d-flex">
                                            <div className="course-details__progress my-auto">
                                                <div className="course-details__progress-item">
                                                    <p className="course-details__progress-text">
                                                        Excellent
                                                    </p>
                                                    <div className="course-details__progress-bar">
                                                        <span style={{ width: '95%' }} />
                                                    </div>
                                                    <p className="course-details__progress-count">
                                                        5
                                                    </p>
                                                </div>
                                                <div className="course-details__progress-item">
                                                    <p className="course-details__progress-text">
                                                        Very Good
                                                    </p>
                                                    <div className="course-details__progress-bar">
                                                        <span style={{ width: '65%' }} />
                                                    </div>
                                                    <p className="course-details__progress-count">
                                                        2
                                                    </p>
                                                </div>
                                                <div className="course-details__progress-item">
                                                    <p className="course-details__progress-text">
                                                        Average
                                                    </p>
                                                    <div className="course-details__progress-bar">
                                                        <span style={{ width: '33%' }} />
                                                    </div>
                                                    <p className="course-details__progress-count">
                                                        1
                                                    </p>
                                                </div>
                                                <div className="course-details__progress-item">
                                                    <p className="course-details__progress-text">
                                                        Poor
                                                    </p>
                                                    <div className="course-details__progress-bar">
                                                        <span
                                                            style={{ width: '0%' }}
                                                            className="no-bubble"
                                                        />
                                                    </div>
                                                    <p className="course-details__progress-count">
                                                        0
                                                    </p>
                                                </div>
                                                <div className="course-details__progress-item">
                                                    <p className="course-details__progress-text">
                                                        Terrible
                                                    </p>
                                                    <div className="course-details__progress-bar">
                                                        <span
                                                            style={{ width: '0%' }}
                                                            className="no-bubble"
                                                        />
                                                    </div>
                                                    <p className="course-details__progress-count">
                                                        0
                                                    </p>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
                                            <div className="course-details__review-box">
                                                <p className="course-details__review-count">4.6</p>
                                                <div className="course-details__review-stars">
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star" />
                                                    <i className="fas fa-star-half" />
                                                </div>
                                                <p className="course-details__review-text">
                                                    30 reviews
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="course-details__comment">
                                        <div className="course-details__comment-single">
                                            <div className="course-details__comment-top">
                                                <div className="course-details__comment-img">
                                                    <img src={avt} alt="" />
                                                </div>
                                                <div className="course-details__comment-right">
                                                    <h2 className="course-details__comment-name">
                                                        Steven Meyer
                                                    </h2>
                                                    <div className="course-details__comment-meta">
                                                        <p className="course-details__comment-date">
                                                            26 July, 2019
                                                        </p>
                                                        <div className="course-details__comment-stars">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star star-disabled" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="course-details__comment-text">
                                                Lorem ipsum is simply free text used by copytyping
                                                refreshing. Neque porro est qui dolorem ipsum quia
                                                quaed inventore veritatis et quasi architecto beatae
                                                vitae dicta sunt explicabo.
                                            </p>
                                        </div>
                                        <div className="course-details__comment-single">
                                            <div className="course-details__comment-top">
                                                <div className="course-details__comment-img">
                                                    <img src={team2} alt="" />
                                                </div>
                                                <div className="course-details__comment-right">
                                                    <h2 className="course-details__comment-name">
                                                        Lina Kelley
                                                    </h2>
                                                    <div className="course-details__comment-meta">
                                                        <p className="course-details__comment-date">
                                                            26 July, 2019
                                                        </p>
                                                        <div className="course-details__comment-stars">
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star" />
                                                            <i className="fa fa-star star-disabled" />
                                                            <i className="fa fa-star star-disabled" />
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <p className="course-details__comment-text">
                                                Lorem ipsum is simply free text used by copytyping
                                                refreshing. Neque porro est qui dolorem ipsum quia
                                                quaed inventore veritatis et quasi architecto beatae
                                                vitae dicta sunt explicabo.
                                            </p>
                                        </div>
                                    </div>
                                    <form action="#" className="course-details__comment-form">
                                        <h2 className="course-details__title">Add a review</h2>
                                        <p className="course-details__comment-form-text">
                                            Rate this Course?{' '}
                                            <a href="#give-star" aria-label="review stars">
                                                <i className="fas fa-star" />
                                            </a>
                                            <a href="#give-star" aria-label="review stars">
                                                <i className="fas fa-star" />
                                            </a>
                                            <a href="#give-star" aria-label="review stars">
                                                <i className="fas fa-star" />
                                            </a>
                                            <a href="#give-star" aria-label="review stars">
                                                <i className="fas fa-star" />
                                            </a>
                                            <a href="#give-star" aria-label="review stars">
                                                <i className="fas fa-star" />
                                            </a>
                                        </p>
                                        <div className="row">
                                            <div className="col-lg-6">
                                                <input type="text" placeholder="Your Name" />
                                                <input type="text" placeholder="Email Address" />
                                            </div>
                                            <div className="col-lg-12">
                                                <textarea placeholder="Write Message" />
                                                <button
                                                    type="submit"
                                                    className="thm-btn course-details__comment-form-btn"
                                                >
                                                    Leave a Review
                                                </button>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4">
                        {isAuthor ? (
                            <div className="course-details__price">
                                <Link className="course-details__price-text" to="">
                                    Edit Course
                                </Link>{' '}
                                <br />
                                <Link className="course-details__price-amount" to="">
                                    Manage Your Student
                                </Link>
                                <Link
                                    to={`/add-lecture/${idCourse}`}
                                    className="thm-btn course-details__price-btn"
                                >
                                    Add Lecture
                                </Link>
                            </div>
                        ) : enrolled === undefined ? (
                            <div className="course-details__price">
                                <p className="course-details__price-text">Course price </p>
                                <p className="course-details__price-amount">$Free</p>
                                <Link
                                    to={`/checkout/${idCourse}`}
                                    className="thm-btn course-details__price-btn"
                                >
                                    Buy This Course
                                </Link>
                            </div>
                        ) : (
                            <div className="course-details__price">
                                {/* <p className="course-details__price-text">Course price </p>
                                        <p className="course-details__price-amount">$Free</p> */}
                                <Link
                                    to={`/courses/${idCourse}`}
                                    className="thm-btn course-details__price-btn"
                                >
                                    Study Now!
                                </Link>
                            </div>
                        )}
                        <div className="course-details__meta">
                            <a href="#none" className="course-details__meta-link">
                                <span className="course-details__meta-icon">
                                    <i className="far fa-clock" />
                                </span>
                                Durations: <span>10 hours</span>
                            </a>
                            <a href="#none" className="course-details__meta-link">
                                <span className="course-details__meta-icon">
                                    <i className="far fa-folder-open" />
                                </span>
                                Lectures: <span>6</span>
                            </a>
                            <a href="#none" className="course-details__meta-link">
                                <span className="course-details__meta-icon">
                                    <i className="far fa-flag" />
                                </span>
                                Skill Level: <span>Advanced</span>
                            </a>
                            <a href="#none" className="course-details__meta-link">
                                <span className="course-details__meta-icon">
                                    <i className="far fa-bell" />
                                </span>
                                Language: <span>English</span>
                            </a>
                        </div>
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
                                            /* eslint-disable-next-line camelcase */
                                        >
                                            by
                                            <span>{`${course?.instructor?.first_name} ${course?.instructor?.last_name}`}</span>
                                        </Link>

                                        <h3>
                                            <a href="#none">{course?.courseName}</a>
                                        </h3>
                                        <div className="course-details__list-stars">
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <i className="fas fa-star" />
                                            <span>4.8</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
