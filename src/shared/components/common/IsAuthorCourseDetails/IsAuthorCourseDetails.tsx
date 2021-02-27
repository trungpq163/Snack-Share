import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    idCourse: string;
}

const IsAuthorCourseDetails = ({ idCourse }: Props) => {
    return (
        <>
            <div className="course-details__price">
                <Link className="course-details__price-text" to="">
                    Edit Course
                </Link>{' '}
                <br />
                <Link className="course-details__price-amount" to="">
                    Manage Your Student
                </Link>
                <Link to={`/add-lecture/${idCourse}`} className="thm-btn course-details__price-btn">
                    Add Lecture
                </Link>
            </div>
        </>
    );
};

export default IsAuthorCourseDetails;
