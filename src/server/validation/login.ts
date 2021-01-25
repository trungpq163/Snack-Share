import Validator from 'validator';
import isEmpty from './is-empty';

interface Errors {
    email?: string;
    password?: string;
}

const validateLoginInput = (data: any) => {
    const errors: Errors = {};

    data.email = !isEmpty(data.email) ? data.email : '';
    data.password = !isEmpty(data.password) ? data.password : '';

    if (!Validator.isEmail(data.email)) {
        errors.email = 'Email is invalid';
    }

    if (Validator.isEmpty(data.email)) {
        errors.email = 'Email is required';
    }

    if (Validator.isEmpty(data.password)) {
        errors.password = 'Password field is required';
    }

    if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
        errors.password = 'Password must be at least 6 characters';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};

export default validateLoginInput;
