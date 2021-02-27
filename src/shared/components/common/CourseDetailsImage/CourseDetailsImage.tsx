import * as React from 'react';

interface Props {
    image: string;
}

const CourseDetailsImage = ({ image }: Props) => {
    return (
        <div className="course-one__image">
            <img src={image} alt="" />
            <i className="far fa-heart" />
        </div>
    );
};

export default CourseDetailsImage;
