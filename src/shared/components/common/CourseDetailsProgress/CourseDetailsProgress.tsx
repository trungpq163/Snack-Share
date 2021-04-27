import * as React from 'react';
import { useTranslation } from 'react-i18next';

const CourseDetailsProgress = () => {
    const { t } = useTranslation();
    return (
        <>
            <div className="col-xl-7 d-flex">
                <div className="course-details__progress my-auto">
                    <div className="course-details__progress-item">
                        <p className="course-details__progress-text">{t('allCourses.excellent')}</p>
                        <div className="course-details__progress-bar">
                            <span style={{ width: '100%' }} />
                        </div>
                        <p className="course-details__progress-count">5</p>
                    </div>
                    <div className="course-details__progress-item">
                        <p className="course-details__progress-text">{t('allCourses.veryGood')}</p>
                        <div className="course-details__progress-bar">
                            <span style={{ width: '80%' }} />
                        </div>
                        <p className="course-details__progress-count">4</p>
                    </div>
                    <div className="course-details__progress-item">
                        <p className="course-details__progress-text">{t('allCourses.average')}</p>
                        <div className="course-details__progress-bar">
                            <span style={{ width: '60%' }} />
                        </div>
                        <p className="course-details__progress-count">3</p>
                    </div>
                    <div className="course-details__progress-item">
                        <p className="course-details__progress-text">{t('allCourses.poor')}</p>
                        <div className="course-details__progress-bar">
                            <span style={{ width: '40%' }} />
                        </div>
                        <p className="course-details__progress-count">2</p>
                    </div>
                    <div className="course-details__progress-item">
                        <p className="course-details__progress-text">{t('allCourses.terrible')}</p>
                        <div className="course-details__progress-bar">
                            <span style={{ width: '20%' }} />
                        </div>
                        <p className="course-details__progress-count">1</p>
                    </div>
                </div>
            </div>
        </>
    );
};

export default CourseDetailsProgress;
