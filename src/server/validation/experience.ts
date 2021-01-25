import Validator from 'validator';
import isEmpty from './is-empty';

interface Errors {
    title?: string;
    company?: string;
    from?: string;
}

const validateExperienceInput = (data: any) => {
    const errors: Errors = {};

    data.title = !isEmpty(data.title) ? data.title : '';
    data.company = !isEmpty(data.company) ? data.company : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    if (Validator.isEmpty(data.title)) {
        errors.title = 'Job title field is required';
    }

    if (Validator.isEmpty(data.company)) {
        errors.company = 'Company field is required';
    }

    if (Validator.isEmpty(data.from)) {
        errors.from = 'From date field is required';
    }

    return {
        errors,
        isValid: isEmpty(errors),
    };
};

export default validateExperienceInput;
