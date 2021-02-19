import * as React from 'react';
import InputDropdown from 'components/common/InputDropdown/InputDropdown';

interface Props {
    values?: any;
    users?: any;
    courses?: any[];
    handleChange: (name: any) => (event: any) => void;
}

const CreateEnrollAdmin = ({ values, handleChange }: Props) => {
    // eslint-disable-next-line prefer-const
    let options = [{ label: 'users?.email', value: 'values?.role' }];
    return (
        <div className="block__header">
            <div className="block-title block-title__center">
                <h3>Create Enroll</h3>
            </div>
            <form className="wrapper" style={{ width: '70%' }}>
                <InputDropdown
                    info="Student Email"
                    options={options}
                    value={values?.email}
                    name="email"
                    onChange={handleChange('email')}
                    required
                />
            </form>
        </div>
    );
};

export default CreateEnrollAdmin;
