import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    idCourse: string;
}

const StudyNowCourseDetails = ({ idCourse }: Props) => {
    return (
        <div className="course-details__price">
            <Link to={`/courses/${idCourse}`} className="thm-btn course-details__price-btn">
                Study Now!
            </Link>
        </div>
    );
};

export default StudyNowCourseDetails;
