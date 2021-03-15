import * as React from 'react';
// import { Link } from 'react-router-dom';

interface Props {
    price: number;
    redirectToSessionCheckout: any;
}

// idCourse,
const BuyThisCourseDetails = ({ price, redirectToSessionCheckout }: Props) => {
    return (
        <div className="course-details__price">
            <p className="course-details__price-text">Course price </p>
            <p className="course-details__price-amount">{price === 0 ? '$Free' : `${price}$`}</p>
            {/* <Link to={`/checkout/${idCourse}`} className="thm-btn course-details__price-btn">
                Buy This Course
            </Link> */}
            <a
                onClick={redirectToSessionCheckout}
                style={{
                    cursor: 'pointer',
                }}
                className="thm-btn course-details__price-btn"
            >
                Buy This Course
            </a>
        </div>
    );
};

export default BuyThisCourseDetails;
