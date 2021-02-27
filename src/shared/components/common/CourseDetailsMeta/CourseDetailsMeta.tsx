import * as React from 'react';

interface Props {
    skillLevel: string;
    language: string;
}

const CourseDetailsMeta = ({ skillLevel, language }: Props) => {
    return (
        <div className="course-details__meta">
            <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                    <i className="far fa-clock" />
                </span>
                Durations: <span>10 hours</span>
            </a>
            <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                    <i className="far fa-folder-open" />
                </span>
                Lectures: <span>6</span>
            </a>
            <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                    <i className="far fa-flag" />
                </span>
                Skill Level: <span>{skillLevel}</span>
            </a>
            <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                    <i className="far fa-bell" />
                </span>
                Language: <span>{language}</span>
            </a>
        </div>
    );
};

export default CourseDetailsMeta;
