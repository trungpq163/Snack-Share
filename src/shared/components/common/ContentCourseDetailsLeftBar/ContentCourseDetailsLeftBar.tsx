import * as React from 'react';
import OverviewCourseDetails from '../OverviewCourseDetails/OverviewCourseDetails';
import CurriculumCourseDetails from '../CurriculumCourseDetails/CurriculumCourseDetails';
import ReviewCourseDetails from '../ReviewCourseDetails/ReviewCourseDetails';

interface Props {
    isOverviewContentClass: string;
    isCurriculumContentClass: string;
    courseDescription: string;
    isReviewContentClass: string;
    team2: string;
    avt: string;
    ratings: any;
}

const ContentCourseDetailsLeftBar = ({
    courseDescription,
    isCurriculumContentClass,
    isOverviewContentClass,
    isReviewContentClass,
    team2,
    avt,
    ratings,
}: Props) => {
    return (
        <div className="tab-content course-details__tab-content ">
            <OverviewCourseDetails
                courseDescription={courseDescription}
                isOverviewContentClass={isOverviewContentClass}
            />
            <CurriculumCourseDetails isCurriculumContentClass={isCurriculumContentClass} />
            <ReviewCourseDetails
                avt={avt}
                isReviewContentClass={isReviewContentClass}
                team2={team2}
                ratings={ratings}
            />
        </div>
    );
};

export default ContentCourseDetailsLeftBar;
