import Validator from 'validator';
import isEmpty from './is-empty';

interface Error {
    school?: string;
    degree?: string;
    fieldofstudy?: string;
    from?: string;
}

const validateExperienceInput = (data: any) => {
    const errors: Error = {};

    data.school = !isEmpty(data.school) ? data.school : '';
    data.degree = !isEmpty(data.degree) ? data.degree : '';
    data.fieldofstudy = !isEmpty(data.fieldofstudy) ? data.fieldofstudy : '';
    data.from = !isEmpty(data.from) ? data.from : '';

    if (Validator.isEmpty(data.school)) {
        errors.school = 'School field is required';
    }

    if (Validator.isEmpty(data.degree)) {
        errors.degree = 'Degree field is required';
    }

    if (Validator.isEmpty(data.fieldofstudy)) {
        errors.fieldofstudy = 'Field of study field is required';
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
