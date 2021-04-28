import * as React from 'react';
import { useTranslation } from 'react-i18next';

import InputField from '../../../components/common/InputField/InputField';
import TextArea from '../../../components/common/TextAreaField/TextAreaField';

interface Props {
    handleSubmit: (e: React.FormEvent) => void;
    values: any;
    handleCheck: (_e: any) => void;
    handleChange: (name: any) => (event: any) => void;
}

const FormAddEducation = ({ handleChange, handleCheck, handleSubmit, values }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>{t('addEducation.title')}</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="school"
                    placeholder="* School"
                    text={t('addEducation.requiredFields')}
                    onChange={handleChange('school')}
                    value={values?.school}
                    required={true}
                />
                <InputField
                    name="degree"
                    placeholder={t('addEducation.degreeOfCertification')}
                    text=""
                    onChange={handleChange('degree')}
                    value={values?.degree}
                    required={true}
                />
                <InputField
                    name="fieldofstudy"
                    placeholder={t('addEducation.fieldOfStudy')}
                    text=""
                    onChange={handleChange('fieldofstudy')}
                    value={values?.fieldofstudy}
                    required={true}
                />
                <InputField
                    name="from"
                    type="date"
                    text={t('addEducation.fromDate')}
                    onChange={handleChange('from')}
                    value={values?.from}
                />
                <InputField
                    name="to"
                    type="date"
                    text={t('addEducation.toDate')}
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
                        {t('addEducation.currentJob')}
                    </label>
                </div>
                <TextArea
                    name="description"
                    text={t('addEducation.about')}
                    placeholder={t('addEducation.jobDescription')}
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
