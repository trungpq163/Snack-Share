import * as React from 'react';

import CourseDetailsProgress from '../CourseDetailsProgress/CourseDetailsProgress';
import CourseDetailsReviewBox from '../CourseDetailsReviewBox/CourseDetailsReviewBox';
import CourseDetailsComment from '../CourseDetailsComment/CourseDetailsComment';
import CourseDetailsCommentFormContainer from '../../../containers/common/CourseDetailsCommentFormContainer/CourseDetailsCommentFormContainer';
import ButtonRedirectToLogin from '../ButtonRedirectToLogin/ButtonRedirectToLogin';

interface Props {
    team2: string;
    avt: string;
    isReviewContentClass: string;
    ratings: any;
    user: any;
    idCourse: string;
}

const ReviewCourseDetails = ({
    isReviewContentClass,
    avt,
    team2,
    ratings,
    user,
    idCourse,
}: Props) => {
    console.log('ratings at review with love', ratings);
    const hadRated = ratings.find((rating: any, _index: number) => rating.user._id === user.id);

    const countRating =
        ratings.length === 0
            ? 0
            : Number(
                  (
                      ratings.map((x: any) => x.star).reduce((x: any, y: any) => x + y, 0) /
                      ratings.length
                  ).toFixed(2)
              );

    return (
        <div className={isReviewContentClass} role="tabpanel" id="review">
            <div className="row">
                <CourseDetailsProgress />
                <CourseDetailsReviewBox length={ratings.length} countRating={countRating} />
            </div>
            <CourseDetailsComment avt={avt} ratings={ratings} userId={user.id} />
            {JSON.stringify(user) === '{}' ? (
                <ButtonRedirectToLogin />
            ) : hadRated === undefined ? (
                <CourseDetailsCommentFormContainer user={user} idCourse={idCourse} />
            ) : (
                ''
            )}
        </div>
    );
};

export default ReviewCourseDetails;
