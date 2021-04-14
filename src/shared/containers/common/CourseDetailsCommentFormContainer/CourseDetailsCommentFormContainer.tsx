import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { toastErrorNotify, toastSuccessNotify } from '../../../utils/toast';
import CourseDetailsCommentForm from '../../../components/common/CourseDetailsCommentForm/CourseDetailsCommentForm';
import { addRating, getAllRatingsByIDCourse } from '../../../store/ratings/effects';

interface Props {
    user: any;
    idCourse: string;
}

const CourseDetailsCommentFormContainer = ({ user, idCourse }: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [star, setStar] = React.useState(0);
    const [messageReview, setMessageReview] = React.useState('');
    const handleChangeStar = (newRatings: any) => setStar(Number(newRatings));
    const handleChangeMessageReview = (_name: any) => (event: any) => {
        setMessageReview(event.target.value);
    };
    const handleSubmit = (e: React.FormEvent<any>) => {
        e.preventDefault();

        const dataReview = JSON.stringify({
            course: idCourse,
            user: user.id,
            star: star.toString(),
            content: messageReview,
        });
        console.log('dataReview', dataReview);

        if (star === 0) {
            return toastErrorNotify('Please star for course ~~');
        } else if (messageReview === '') {
            return toastErrorNotify('Please write review ~~');
        }

        dispatch(
            addRating(
                dataReview,
                (err: any) => toastErrorNotify(err),
                (mess: string) => toastSuccessNotify(mess),
                () => dispatch(getAllRatingsByIDCourse(idCourse)),
                () => history.push(`/course-details/${idCourse}#review`)
            )
        );
    };

    return (
        <CourseDetailsCommentForm
            star={star}
            messageReview={messageReview}
            handleChangeStar={handleChangeStar}
            handleChangeMessageReview={handleChangeMessageReview}
            handleSubmit={handleSubmit}
        />
    );
};

export default CourseDetailsCommentFormContainer;
