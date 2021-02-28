import * as React from 'react';

import InputDropdown from 'components/common/InputDropdown/InputDropdown';

interface Props {
    values?: any;
    users?: any;
    courses?: any[];
    handleChange: (name: any) => (event: any) => void;
    options: any;
    handleSubmit: any;
}

const CreateEnrollment = ({ values, handleChange, options, handleSubmit }: Props) => {
    return (
        <div className="block__header">
            <div className="block-title block-title__center">
                <h3>Create Enrollment</h3>
            </div>
            <form className="wrapper" style={{ width: '70%' }} onSubmit={handleSubmit}>
                <InputDropdown
                    info="Student Email"
                    options={options?.users}
                    value={values?.userId}
                    name="userId"
                    onChange={handleChange('userId')}
                    required
                />
                <InputDropdown
                    info="Course Name"
                    options={options?.courses}
                    value={values?.courseId}
                    name="courseId"
                    onChange={handleChange('courseId')}
                    required
                />
                <button type="submit" className="btn btn--gradient">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateEnrollment;
