import * as React from 'react';

import RatingStar from '../RatingStar/RatingStar';

import capitalizeFirstLetter from '../../../utils/capitalizeFirstLetter';
import { isoDateToString } from '../../../utils/isoToString';

interface Props {
    ratings: any;
    avt: any;
    userId: string;
}

const CourseDetailsComment = ({ ratings, avt, userId }: Props) => {
    const handleName = <T extends {}>(
        firstName: T,
        lastName: T,
        userIdReview: T,
        userId: T,
        render: T
    ): T => {
        if (userId === userIdReview) {
            return render;
        }
        return (`${capitalizeFirstLetter(firstName as any)} ${capitalizeFirstLetter(
            lastName as any
        )}` as unknown) as T;
    };
    return (
        <>
            <div className="course-details__comment">
                {ratings.map((rating: any, index: number) => (
                    <div key={index}>
                        <div className="course-details__comment-single">
                            <div className="course-details__comment-top">
                                <div className="course-details__comment-img">
                                    <img src={avt} alt="" />
                                </div>
                                <div className="course-details__comment-right">
                                    <h2 className="course-details__comment-name">
                                        {handleName(
                                            rating.user.first_name,
                                            rating.user.last_name,
                                            rating.user._id,
                                            userId,
                                            'Bạn'
                                        )}
                                    </h2>
                                    <div className="course-details__comment-meta">
                                        <p className="course-details__comment-date">
                                            {`${isoDateToString(rating.created_at)}`}
                                        </p>
                                        <RatingStar countRating={rating.star} />
                                    </div>
                                </div>
                            </div>
                            <p className="course-details__comment-text">{rating?.content}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default CourseDetailsComment;
