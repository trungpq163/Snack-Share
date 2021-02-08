import * as React from 'react';
import { ToastContainer } from 'react-toastify';
import InputField from 'components/InputField/InputField';

interface Props {
    handleSubmit: (e: React.FormEvent) => void;
    values: any;
    handleChange: (name: any) => (event: any) => void;
}

const EditCategory = ({ handleChange, values, handleSubmit }: Props) => {
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>Edit Category</h3>
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
            <ToastContainer />
        </div>
    );
};

export default EditCategory;
