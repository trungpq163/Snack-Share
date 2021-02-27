import * as React from 'react';

interface Props {
    firstName: string;
    lastName: string;
    avt: string;
}

const CourseDetailsAuthor = ({ firstName, lastName, avt }: Props) => {
    return (
        <>
            <p className="course-details__author">
                <img src={avt} alt="" />
                by <a href="#none">{`${firstName} ${lastName}`}</a>
            </p>
        </>
    );
};

export default CourseDetailsAuthor;
