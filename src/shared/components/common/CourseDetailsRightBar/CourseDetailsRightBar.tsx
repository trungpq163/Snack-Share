import * as React from 'react';
import BuyThisCourseDetails from '../BuyThisCourseDetails/BuyThisCourseDetails';
import CourseDetailsList from '../CourseDetailsList/CourseDetailsList';
import CourseDetailsMeta from '../CourseDetailsMeta/CourseDetailsMeta';
import IsAuthorCourseDetails from '../IsAuthorCourseDetails/IsAuthorCourseDetails';
import StudyNowCourseDetails from '../StudyNowCourseDetails/StudyNowCourseDetails';

interface Props {
    isAuthor: boolean;
    idCourse: string;
    enrolled: any;
    price: number;
    language: string;
    skillLevel: string;
    courses: any;
    redirectToSessionCheckout: any;
    handleClickBuyFreeCourse: any;
    loading: boolean;
}

const CourseDetailsRightBar = ({
    isAuthor,
    idCourse,
    enrolled,
    price,
    language,
    skillLevel,
    courses,
    redirectToSessionCheckout,
    handleClickBuyFreeCourse,
    loading,
}: Props) => {
    return (
        <div className="col-lg-4">
            {isAuthor ? (
                <IsAuthorCourseDetails idCourse={idCourse} />
            ) : enrolled === undefined ? (
                <BuyThisCourseDetails
                    // idCourse={idCourse}
                    price={price || 0}
                    redirectToSessionCheckout={redirectToSessionCheckout}
                    handleClickBuyFreeCourse={handleClickBuyFreeCourse}
                    loading={loading}
                />
            ) : (
                <StudyNowCourseDetails idCourse={idCourse} />
            )}
            <CourseDetailsMeta language={language} skillLevel={skillLevel} />
            <CourseDetailsList courses={courses} />
        </div>
    );
};

export default CourseDetailsRightBar;
