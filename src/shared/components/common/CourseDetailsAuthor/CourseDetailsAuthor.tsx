import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    firstName: string;
    lastName: string;
    avt: string;
    idInstructor: any;
}

const CourseDetailsAuthor = ({ firstName, lastName, avt, idInstructor }: Props) => {
    return (
        <>
            <p className="course-details__author">
                <Link to={`/user/${idInstructor || ''}`}>
                    <img src={avt} alt="" />
                </Link>
                by <Link to={`/user/${idInstructor || ''}`}>{`${firstName} ${lastName}`}</Link>
            </p>
        </>
    );
};

export default CourseDetailsAuthor;
