import React, { useEffect, useState } from 'react';
import Swiper from 'react-id-swiper';

import './CourseOne.Styles.css';
import 'swiper/css/swiper.css';

import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

import team1 from '../../../assets/images/team-1-1.jpg';

const CourseOne = ({ courses, loading }: any) => {
    const { t } = useTranslation();
    const [loadingDOM, setLoadingDOM] = useState(true);
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

    useEffect(() => {
        setLoadingDOM(false);
    }, []);

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
                    <div className="course-one__carousel">
                        <Swiper {...params}>
                            {loading || loadingDOM ? (
                                <CircleLoader />
                            ) : (
                                courses?.map((course: any, index: any) => (
                                    <div className="item" key={index}>
                                        <div className={`course-one__single color-${index}`}>
                                            <Link
                                                className="course-one__image"
                                                to={`/course-details/${course?._id}`}
                                            >
                                                <img src={course?.image} alt="" />
                                                <i className="far fa-heart" />
                                            </Link>
                                            <div className="course-one__content">
                                                <a href="#none" className="course-one__category">
                                                    {course?.category?.categoryName}
                                                </a>
                                                <div className="course-one__admin">
                                                    <img src={team1} alt="" />
                                                    by {/* eslint-disable-next-line camelcase */}
                                                    <a href="/teacher-details">{`${course?.instructor?.first_name} ${course?.instructor?.last_name}`}</a>
                                                </div>
                                                <h2 className="course-one__title">
                                                    <Link to={`/course-details/${course?._id}`}>
                                                        {course?.courseName}
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
                                                    <span className="course-one__stars-count">
                                                        250
                                                    </span>
                                                </div>
                                                <div className="course-one__meta">
                                                    <a href="/course-details">
                                                        <i className="far fa-clock" /> 10 Hours
                                                    </a>
                                                    <a href="/course-details">
                                                        <i className="far fa-folder-open" /> 6
                                                        Lectures
                                                    </a>
                                                    <a href="/course-details">$18</a>
                                                </div>
                                                <a href="#none" className="course-one__link">
                                                    See Preview
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}
                        </Swiper>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default CourseOne;
