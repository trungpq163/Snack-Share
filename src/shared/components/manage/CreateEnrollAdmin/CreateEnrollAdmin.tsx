import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import InputDropdown from 'components/common/InputDropdown/InputDropdown';

interface Props {
    values?: any;
    users?: any;
    courses?: any[];
    handleChange: (name: any) => (event: any) => void;
    options: any;
    handleSubmit: any;
}

const CreateEnrollAdmin = ({ values, handleChange, options, handleSubmit }: Props) => {
    console.log('values', values);
    return (
        <div className="block__header">
            <div className="block-title block-title__center">
                <h3>Create Enroll</h3>
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
            <ToastContainer />
        </div>
    );
};

export default CreateEnrollAdmin;
