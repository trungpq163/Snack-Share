import * as React from 'react';
import { useTranslation } from 'react-i18next';

import RatingStar from '../RatingStar/RatingStar';

interface Props {
    countRating: number;
    length: number;
}

const CourseDetailsReviewBox = ({ countRating, length }: Props) => {
    const { t } = useTranslation();
    return (
        <>
            <div className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
                <div className="course-details__review-box">
                    {length === 0 ? (
                        <p className="course-details__review-text">{t('allCourses.noRatings')}</p>
                    ) : (
                        <>
                            <p className="course-details__review-count">{countRating}</p>
                            <div className="course-details__review-stars">
                                <RatingStar countRating={countRating} />
                            </div>

                            <p className="course-details__review-text">{`${length} ${t(
                                'allCourses.reviews'
                            )}`}</p>
                        </>
                    )}
                </div>
            </div>
        </>
    );
};

export default CourseDetailsReviewBox;
