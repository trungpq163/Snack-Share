import * as React from 'react';
import ReactStars from 'react-stars';

import TextAreaField from '../../../components/common/TextAreaField/TextAreaField';

interface Props {
    star: any;
    messageReview: string;
    handleChangeStar: any;
    handleChangeMessageReview: any;
    handleSubmit: any;
}

const CourseDetailsCommentForm = ({
    handleChangeMessageReview,
    handleChangeStar,
    messageReview,
    star,
    handleSubmit,
}: Props) => {
    return (
        <>
            <form onSubmit={handleSubmit} className="course-details__comment-form">
                <h2 className="course-details__title">Add a review</h2>
                <p className="course-details__comment-form-text">Rate this Course? </p>
                <ReactStars
                    count={5}
                    size={24}
                    color2={'#f16101'}
                    onChange={handleChangeStar}
                    value={star}
                />

                <div className="row">
                    <div className="col-lg-12 mt-3">
                        <TextAreaField
                            name="messageReview"
                            placeholder="Write Message"
                            onChange={handleChangeMessageReview('messageReview')}
                            value={messageReview}
                            required={true}
                        />
                        <button type="submit" className="thm-btn course-details__comment-form-btn">
                            Leave a Review
                        </button>
                    </div>
                </div>
            </form>
        </>
    );
};

export default CourseDetailsCommentForm;
