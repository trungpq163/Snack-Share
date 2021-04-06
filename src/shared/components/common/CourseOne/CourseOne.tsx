/* eslint-disable camelcase */
import React from 'react';
import Swiper from 'react-id-swiper';

import { useTranslation } from 'react-i18next';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import CourseOneItem from '../../../components/common/CourseOneItem/CourseOneItem';
import { paramCourseOne } from '../../../utils/paramsSwiper';

import 'swiper/css/swiper.css';
import './CourseOne.Styles.css';

const CourseOne = ({ courses, loading, enrollments }: any) => {
    const { t } = useTranslation();
    console.log('course at courseOneItem', courses);
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
                            <Swiper {...paramCourseOne}>
                                {courses.slice(0, 3).map((course: any, index: number) => (
                                    <div key={index}>
                                        <CourseOneItem
                                            course={course}
                                            index={index}
                                            enrollments={enrollments}
                                        />
                                    </div>
                                ))}
                            </Swiper>
                        </div>
                    )}
                </div>
            </section>
        </div>
    );
};

export default CourseOne;
