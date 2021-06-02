import * as React from 'react';
import { useTranslation } from 'react-i18next';
import CircleDashedLoader from '../../loader/CircleDashedLoader/CircleDashedLoader';

interface Props {
    price: number;
    redirectToSessionCheckout: any;
    handleClickBuyFreeCourse: any;
    loading: boolean;
}

// idCourse,
const BuyThisCourseDetails = ({
    price,
    redirectToSessionCheckout,
    handleClickBuyFreeCourse,
    loading,
}: Props) => {
    const { t } = useTranslation();

    const handleClickBuyCourse = () => {
        if (price === 0) {
            return handleClickBuyFreeCourse();
        }
        return redirectToSessionCheckout();
    };

    return (
        <div className="course-details__price">
            <p className="course-details__price-text">{t('allCourses.coursePrice')}</p>
            <p className="course-details__price-amount">{price === 0 ? '$Free' : `${price}$`}</p>
            <a
                onClick={handleClickBuyCourse}
                style={{
                    cursor: 'pointer',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}
                className="thm-btn course-details__price-btn"
            >
                {loading === true ? <CircleDashedLoader /> : t('allCourses.buyThisCourse')}
            </a>
        </div>
    );
};

export default BuyThisCourseDetails;
