import * as React from 'react';

import { ToastContainer } from 'react-toastify';
import InputField from 'components/common/InputField/InputField';
import TextArea from 'components/common/TextAreaField/TextAreaField';

interface Props {
    handleSubmit: (e: React.FormEvent) => void;
    values: any;
    handleCheck: (_e: any) => void;
    handleChange: (name: any) => (event: any) => void;
}

const FormAddExperience = ({ handleSubmit, values, handleChange, handleCheck }: Props) => {
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>Add any job or position that you have had in the past or current</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="company"
                    placeholder="* Company"
                    text="* = required fields"
                    onChange={handleChange('company')}
                    value={values?.company}
                    required
                />
                <InputField
                    name="title"
                    placeholder="* Job Title"
                    text=""
                    onChange={handleChange('title')}
                    value={values?.title}
                    required
                />
                <InputField
                    name="location"
                    placeholder="Location"
                    text=""
                    onChange={handleChange('location')}
                    value={values?.location}
                />
                <InputField
                    name="from"
                    type="date"
                    text="From Date"
                    onChange={handleChange('from')}
                    value={values?.from}
                />
                <InputField
                    name="to"
                    type="date"
                    text="To Date"
                    onChange={handleChange('to')}
                    value={values?.to}
                    disabled={values?.disabled ? 'disabled' : ''}
                />
                <div style={{ marginBottom: '1.5rem' }}>
                    <input
                        type="checkbox"
                        className="form-check-input"
                        name="current"
                        value={values?.current}
                        checked={values?.current ? true : false}
                        onChange={handleCheck}
                        id="current"
                    />
                    <label
                        style={{
                            margin: '7px',
                            padding: 0,
                            color: '#999999',
                            fontSize: '0.77rem',
                            fontWeight: 'lighter',
                        }}
                        htmlFor="current"
                    >
                        Current Job
                    </label>
                </div>
                <TextArea
                    name="description"
                    text="Tell us about the the position"
                    placeholder="Job Description"
                    onChange={handleChange('description')}
                    value={values?.description}
                />
                <button type="submit" className="btn btn--gradient">
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default FormAddExperience;
