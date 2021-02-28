import * as React from 'react';

interface Props {
    isOverviewContentClass: string;
    courseDescription: string;
}

const OverviewCourseDetails = ({ isOverviewContentClass, courseDescription }: Props) => {
    return (
        <div className={isOverviewContentClass} role="tabpanel" id="overview">
            <p className="course-details__tab-text">{courseDescription}</p>
        </div>
    );
};

export default OverviewCourseDetails;
