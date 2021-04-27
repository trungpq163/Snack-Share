import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Props {
    firstName: string;
    lastName: string;
    avt: string;
    idInstructor: any;
}

const CourseDetailsAuthor = ({ firstName, lastName, avt, idInstructor }: Props) => {
    const { t } = useTranslation();
    return (
        <>
            <p className="course-details__author">
                <Link to={`/user/${idInstructor || ''}`}>
                    <img src={avt} alt="" />
                </Link>
                {t('allCourses.by')}{' '}
                <Link to={`/user/${idInstructor || ''}`}>{`${firstName} ${lastName}`}</Link>
            </p>
        </>
    );
};

export default CourseDetailsAuthor;
