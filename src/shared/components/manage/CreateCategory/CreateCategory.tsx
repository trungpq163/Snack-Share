import * as React from 'react';

import InputField from '../../../components/common/InputField/InputField';

interface Values {
    categoryName?: string;
    no?: number;
}

interface Props {
    values: Values;
    handleSubmit: (e: React.FormEvent) => void;
    handleChange: any;
}

const CreateCategory = ({ values, handleChange, handleSubmit }: Props) => {
    console.log('values', values);
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>Create Category</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="categoryName"
                    placeholder="* Category"
                    text="* = required fields"
                    onChange={handleChange('categoryName')}
                    value={values?.categoryName}
                    required={true}
                />
                <button type="submit" className="btn btn--gradient">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default CreateCategory;
