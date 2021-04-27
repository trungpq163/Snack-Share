import * as React from 'react';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

interface Props {
    idCourse: string;
}

const IsAuthorCourseDetails = ({ idCourse }: Props) => {
    const { t } = useTranslation();
    return (
        <>
            <div className="course-details__price">
                <Link className="course-details__price-text" to={`/edit-course/${idCourse}`}>
                    {t('allCourses.editCourse')}
                </Link>{' '}
                <br />
                <Link
                    className="course-details__price-amount"
                    to={`/manage-your-student/${idCourse}`}
                >
                    {t('allCourses.manageYourStudent')}
                </Link>
                <Link to={`/add-lecture/${idCourse}`} className="thm-btn course-details__price-btn">
                    {t('allCourses.addLecture')}
                </Link>
            </div>
        </>
    );
};

export default IsAuthorCourseDetails;
