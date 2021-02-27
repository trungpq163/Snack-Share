import * as React from 'react';
import { Link } from 'react-router-dom';

interface Props {
    price: number;
    idCourse: string;
}

const BuyThisCourseDetails = ({ idCourse, price }: Props) => {
    return (
        <div className="course-details__price">
            <p className="course-details__price-text">Course price </p>
            <p className="course-details__price-amount">{price === 0 ? '$Free' : `${price}$`}</p>
            <Link to={`/checkout/${idCourse}`} className="thm-btn course-details__price-btn">
                Buy This Course
            </Link>
        </div>
    );
};

export default BuyThisCourseDetails;
