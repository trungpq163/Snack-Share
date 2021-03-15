import * as React from 'react';

import InputField from '../../../components/common/InputField/InputField';
import TextArea from '../../../components/common/TextAreaField/TextAreaField';

interface Props {
    handleSubmit: (e: React.FormEvent) => void;
    values: any;
    handleCheck: (_e: any) => void;
    handleChange: (name: any) => (event: any) => void;
}

const FormAddEducation = ({ handleChange, handleCheck, handleSubmit, values }: Props) => {
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>Add any school, bootcamp, etc that you have attended</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="school"
                    placeholder="* School"
                    text="* = required fields"
                    onChange={handleChange('school')}
                    value={values?.school}
                    required={true}
                />
                <InputField
                    name="degree"
                    placeholder="* Degree of Certification"
                    text=""
                    onChange={handleChange('degree')}
                    value={values?.degree}
                    required={true}
                />
                <InputField
                    name="fieldofstudy"
                    placeholder="* Field of Study"
                    text=""
                    onChange={handleChange('fieldofstudy')}
                    value={values?.fieldofstudy}
                    required={true}
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
        </div>
    );
};

export default FormAddEducation;
