import * as React from 'react';
import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter';

interface Props {
    team2: string;
    avt: string;
    isReviewContentClass: string;
    ratings: any;
}

const ReviewCourseDetails = ({ isReviewContentClass, avt, team2, ratings }: Props) => {
    console.log('ratings at review with love', ratings);
    const countRating = Number(
        (
            ratings.map((x: any) => x.star).reduce((x: any, y: any) => x + y, 0) / ratings.length
        ).toFixed(2)
    );
    return (
        <div className={isReviewContentClass} role="tabpanel" id="review">
            <div className="row">
                <div className="col-xl-7 d-flex">
                    <div className="course-details__progress my-auto">
                        <div className="course-details__progress-item">
                            <p className="course-details__progress-text">Excellent</p>
                            <div className="course-details__progress-bar">
                                <span style={{ width: '95%' }} />
                            </div>
                            <p className="course-details__progress-count">5</p>
                        </div>
                        <div className="course-details__progress-item">
                            <p className="course-details__progress-text">Very Good</p>
                            <div className="course-details__progress-bar">
                                <span style={{ width: '65%' }} />
                            </div>
                            <p className="course-details__progress-count">2</p>
                        </div>
                        <div className="course-details__progress-item">
                            <p className="course-details__progress-text">Average</p>
                            <div className="course-details__progress-bar">
                                <span style={{ width: '33%' }} />
                            </div>
                            <p className="course-details__progress-count">1</p>
                        </div>
                        <div className="course-details__progress-item">
                            <p className="course-details__progress-text">Poor</p>
                            <div className="course-details__progress-bar">
                                <span style={{ width: '0%' }} className="no-bubble" />
                            </div>
                            <p className="course-details__progress-count">0</p>
                        </div>
                        <div className="course-details__progress-item">
                            <p className="course-details__progress-text">Terrible</p>
                            <div className="course-details__progress-bar">
                                <span style={{ width: '0%' }} className="no-bubble" />
                            </div>
                            <p className="course-details__progress-count">0</p>
                        </div>
                    </div>
                </div>
                <div className="col-xl-5 justify-content-xl-end justify-content-sm-center d-flex">
                    <div className="course-details__review-box">
                        <p className="course-details__review-count">{countRating}</p>
                        <div className="course-details__review-stars">
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
                        </div>
                        <p className="course-details__review-text">{`${ratings.length} reviews`}</p>
                    </div>
                </div>
            </div>
            <div className="course-details__comment">
                {ratings.map((rating: any, index: number) => (
                    <div key={index}>
                        <div className="course-details__comment-single">
                            <div className="course-details__comment-top">
                                <div className="course-details__comment-img">
                                    <img src={avt} alt="" />
                                </div>
                                <div className="course-details__comment-right">
                                    <h2 className="course-details__comment-name">Steven Meyer</h2>
                                    <div className="course-details__comment-meta">
                                        <p className="course-details__comment-date">
                                            26 July, 2019
                                        </p>
                                        <div className="course-details__comment-stars">
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star" />
                                            <i className="fa fa-star star-disabled" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <p className="course-details__comment-text">{rating?.content}</p>
                        </div>
                    </div>
                ))}
            </div>
            <form action="#" className="course-details__comment-form">
                <h2 className="course-details__title">Add a review</h2>
                <p className="course-details__comment-form-text">
                    Rate this Course?{' '}
                    <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star" />
                    </a>
                    <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star" />
                    </a>
                    <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star" />
                    </a>
                    <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star" />
                    </a>
                    <a href="#give-star" aria-label="review stars">
                        <i className="fas fa-star" />
                    </a>
                </p>

                <div className="row">
                    <div className="col-lg-6">
                        <input type="text" placeholder="Your Name" />
                        <input type="text" placeholder="Email Address" />
                    </div>
                    <div className="col-lg-12">
                        <textarea placeholder="Write Message" />
                        <button type="submit" className="thm-btn course-details__comment-form-btn">
                            Leave a Review
                        </button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ReviewCourseDetails;
