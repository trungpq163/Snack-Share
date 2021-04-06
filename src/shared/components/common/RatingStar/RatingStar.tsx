import * as React from 'react';

interface Props {
    countRating: number;
}

const RatingStar = ({ countRating }: Props) => {
    return (
        <>
            {countRating <= 0.5 ? (
                <i className="fas fa-star-half" />
            ) : countRating <= 1 ? (
                <i className="fas fa-star" />
            ) : countRating <= 1.5 ? (
                <>
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half" />
                </>
            ) : countRating <= 2 ? (
                <>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                </>
            ) : countRating <= 2.5 ? (
                <>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half" />
                </>
            ) : countRating <= 3 ? (
                <>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                </>
            ) : countRating <= 3.5 ? (
                <>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half" />
                </>
            ) : countRating <= 4 ? (
                <>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                </>
            ) : countRating <= 4.5 ? (
                <>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star-half" />
                </>
            ) : (
                <>
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                    <i className="fas fa-star" />
                </>
            )}
        </>
    );
};

export default RatingStar;
