import Validator from 'validator';
import isEmpty from './is-empty';

interface Errors {
    content?: string;
    star?: string;
}

const validateRating = ({ content, star }: any) => {
    const errors: Errors = {};

    content = !isEmpty(content) ? content : '';
    star = !isEmpty(star) ? star : '';

    if (Validator.isEmpty(content)) {
        errors.content = 'Please add comment when rating';
    }

    if (!Validator.isLength(content, { min: 6, max: 100 })) {
        errors.content = 'Comment must be at least 6 characters';
    }

    if (Validator.isEmpty(star)) {
        errors.star = 'Please rating!';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};

export default validateRating;
