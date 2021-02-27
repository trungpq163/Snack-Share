import * as React from 'react';

interface Props {
    courseName: string;
    categoryName: string;
}

const CourseDetailsTop = ({ courseName, categoryName }: Props) => {
    return (
        <div className="course-details__top">
            <div className="course-details__top-left">
                <h2 className="course-details__title">{courseName}</h2>
                <div className="course-one__stars">
                    <span className="course-one__stars-wrap">
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                        <i className="fa fa-star" />
                    </span>
                    <span className="course-one__count">4.8</span>
                </div>
            </div>
            <div className="course-details__top-right">
                <a href="#none" className="course-one__category">
                    {categoryName}
                </a>
            </div>
        </div>
    );
};

export default CourseDetailsTop;
