import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    skillLevel: string;
    language: string;
}

const CourseDetailsMeta = ({ skillLevel, language }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="course-details__meta">
            <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                    <i className="far fa-clock" />
                </span>
                {t('allCourses.durations')}: <span>10 hours</span>
            </a>
            <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                    <i className="far fa-folder-open" />
                </span>
                {t('allCourses.lectures')}: <span>6</span>
            </a>
            <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                    <i className="far fa-flag" />
                </span>
                {t('allCourses.skillLevel')}: <span>{skillLevel}</span>
            </a>
            <a href="#none" className="course-details__meta-link">
                <span className="course-details__meta-icon">
                    <i className="far fa-bell" />
                </span>
                {t('allCourses.language')}: <span>{language}</span>
            </a>
        </div>
    );
};

export default CourseDetailsMeta;
