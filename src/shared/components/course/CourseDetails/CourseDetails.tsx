/* eslint-disable camelcase */
import * as React from 'react';

import CourseDetailsRightBar from '../../../components/common/CourseDetailsRightBar/CourseDetailsRightBar';
import CourseDetailsLeftBar from '../../../components/common/CourseDetailsLeftBar/CourseDetailsLeftBar';
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
    language,
    price,
    skillLevel,
    redirectToSessionCheckout,
}: any) => {
    console.log('courses', courses);
    return (
        <section className="course-details">
            <div className="container">
                <div className="row">
                    <CourseDetailsLeftBar
                        avt={avt}
                        categoryName={categoryData?.categoryName || ''}
                        courseDescription={courseDescription || ''}
                        courseName={courseName || ''}
                        firstName={instructorData?.first_name}
                        idInstructor={instructorData?._id}
                        lastName={instructorData?.last_name}
                        image={image}
                        team2={team2}
                    />
                    <CourseDetailsRightBar
                        isAuthor={isAuthor}
                        idCourse={idCourse}
                        price={price || 0}
                        courses={courses}
                        enrolled={enrolled}
                        language={language}
                        skillLevel={skillLevel}
                        redirectToSessionCheckout={redirectToSessionCheckout}
                    />
                </div>
            </div>
        </section>
    );
};

export default CourseDetails;
