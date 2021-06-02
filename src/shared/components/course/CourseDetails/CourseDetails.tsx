/* eslint-disable camelcase */
import * as React from 'react';

import CourseDetailsRightBar from '../../../components/common/CourseDetailsRightBar/CourseDetailsRightBar';
import CourseDetailsLeftBar from '../../../components/common/CourseDetailsLeftBar/CourseDetailsLeftBar';
import { profileImage } from '../../../utils/imageURL';

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
    language,
    price,
    skillLevel,
    redirectToSessionCheckout,
    ratings,
    user,
    courseDetailRatings,
    handleClickBuyFreeCourse,
    loading,
}: any) => {
    console.log('courseDetailRatings', courseDetailRatings);
    return (
        <section className="course-details">
            <div className="container">
                <div className="row">
                    <CourseDetailsLeftBar
                        avt={profileImage().avt}
                        idCourse={idCourse}
                        categoryName={categoryData?.categoryName || ''}
                        courseDescription={courseDescription || ''}
                        courseName={courseName || ''}
                        firstName={instructorData?.first_name}
                        idInstructor={instructorData?._id}
                        lastName={instructorData?.last_name}
                        image={image}
                        team2="https://res.cloudinary.com/snack-dev/image/upload/v1618982622/styles/team-1-2_eqqjvd.jpg"
                        ratings={ratings}
                        user={user}
                    />
                    <CourseDetailsRightBar
                        isAuthor={isAuthor}
                        idCourse={idCourse}
                        price={price || 0}
                        courses={courses}
                        enrolled={enrolled}
                        language={language}
                        skillLevel={skillLevel}
                        loading={loading}
                        redirectToSessionCheckout={redirectToSessionCheckout}
                        handleClickBuyFreeCourse={handleClickBuyFreeCourse}
                    />
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
