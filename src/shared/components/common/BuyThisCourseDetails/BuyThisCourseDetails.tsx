import * as React from 'react';
import { useTranslation } from 'react-i18next';

interface Props {
    price: number;
    redirectToSessionCheckout: any;
}

// idCourse,
const BuyThisCourseDetails = ({ price, redirectToSessionCheckout }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="course-details__price">
            <p className="course-details__price-text">{t('allCourses.coursePrice')}</p>
            <p className="course-details__price-amount">{price === 0 ? '$Free' : `${price}$`}</p>
            <a
                onClick={redirectToSessionCheckout}
                style={{
                    cursor: 'pointer',
                }}
                className="thm-btn course-details__price-btn"
            >
                {t('allCourses.buyThisCourse')}
            </a>
        </div>
    );
};

export default BuyThisCourseDetails;
