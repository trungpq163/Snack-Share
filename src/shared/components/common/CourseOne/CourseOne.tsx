/* eslint-disable camelcase */
import React from 'react';
import Swiper from 'react-id-swiper';

import 'swiper/css/swiper.css';
import './CourseOne.Styles.css';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import team1 from '../../../assets/images/team-1-1.jpg';
import team2 from '../../../assets/images/team-1-2.jpg';
import team3 from '../../../assets/images/team-1-3.jpg';

const CourseOne = ({ courses, loading }: any) => {
    const { t } = useTranslation();
    const params = {
        slidesPerView: 3,
        loop: true,
        speed: 1000,
        spaceBetween: 30,
        autoplay: {
            delay: 3000,
            disableOnInteraction: false,
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },

        // Responsive breakpoints
        breakpoints: {
            1024: {
                slidesPerView: 3,
            },
            768: {
                slidesPerView: 2,
            },
            640: {
                slidesPerView: 2,
            },
            320: {
                slidesPerView: 1,
            },
        },
    };
    return (
        <div
            style={{
                fontFamily: 'Poppins, sans-serif',
                marginTop: '6%',
                borderBottom: '1px solid #eee',
            }}
        >
            <div className="block-title">
                <h2 className="block-title__title">
                    {/* Explore our <br />
                    popular courses */}
                    {t('home.titlePopularCourse')} <br />
                    {t('home.titlePopularCourse2')}
                </h2>
            </div>
            <section className="course-one course-one__teacher-details home-one">
                <div className="container">
                    {loading || courses === undefined ? (
                        <CircleLoader />
                    ) : (
                        <div className="course-one__carousel">
                            <Swiper {...params}>
                                <div className="item">
                                    <div className="course-one__single color-1">
                                        <div className="course-one__image">
                                            <img src={courses[0]?.image} alt="" />
                                            <i className="far fa-heart" />
                                        </div>
                                        <div className="course-one__content">
                                            <a href="#none" className="course-one__category">
                                                {courses[0]?.category?.categoryName}
                                            </a>
                                            <div className="course-one__admin">
                                                <img src={team1} alt="" />
                                                by{' '}
                                                <a href="/teacher-details">{`${courses[0]?.instructor?.first_name} ${courses[0]?.instructor?.last_name}`}</a>
                                            </div>
                                            <h2 className="course-one__title">
                                                <a href="/course-details">
                                                    {' '}
                                                    {courses[0]?.courseName}
                                                </a>
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
                                <div className="item">
                                    <div className="course-one__single color-2">
                                        <div className="course-one__image">
                                            <img src={courses[1]?.image} alt="" />
                                            <i className="far fa-heart" />
                                        </div>
                                        <div className="course-one__content">
                                            <a href="#none" className="course-one__category">
                                                {courses[1]?.category?.categoryName}
                                            </a>
                                            <div className="course-one__admin">
                                                <img src={team2} alt="" />
                                                by{' '}
                                                <a href="/teacher-details">{`${courses[1]?.instructor?.first_name} ${courses[1]?.instructor?.last_name}`}</a>
                                            </div>
                                            <h2 className="course-one__title">
                                                <Link to={`/course-details/${courses[1]?._id}`}>
                                                    {courses[1]?.courseName}
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
                                <div className="item">
                                    <div className="course-one__single color-3">
                                        <div className="course-one__image">
                                            <img src={courses[2]?.image} alt="" />
                                            <i className="far fa-heart" />
                                        </div>
                                        <div className="course-one__content">
                                            <a href="#none" className="course-one__category">
                                                {courses[2]?.category?.categoryName}
                                            </a>
                                            <div className="course-one__admin">
                                                <img src={team3} alt="" />
                                                by{' '}
                                                <a href="/teacher-details">{`${courses[2]?.instructor?.first_name} ${courses[2]?.instructor?.last_name}`}</a>
                                            </div>
                                            <h2 className="course-one__title">
                                                <Link to={`/course-details/${courses[2]?._id}`}>
                                                    {courses[2]?.courseName}
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
                            </Swiper>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CourseOne;
