import * as React from 'react';
import { useTranslation } from 'react-i18next';

import InputField from '../../../components/common/InputField/InputField';
import TextArea from '../../../components/common/TextAreaField/TextAreaField';
import CircleDashedLoader from '../../loader/CircleDashedLoader/CircleDashedLoader';

interface Props {
    handleSubmit: (e: React.FormEvent) => void;
    loader: boolean;
    values: any;
    handleCheck: (_e: any) => void;
    handleChange: (name: any) => (event: any) => void;
}

const FormAddExperience = ({ handleSubmit, values, handleChange, handleCheck, loader }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>{t('addExperience.title')}</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="company"
                    placeholder={t('addExperience.company')}
                    text={t('addExperience.requiredFields')}
                    onChange={handleChange('company')}
                    value={values?.company}
                    required
                />
                <InputField
                    name="title"
                    placeholder={t('addExperience.jobTitle')}
                    text=""
                    onChange={handleChange('title')}
                    value={values?.title}
                    required
                />
                <InputField
                    name="location"
                    placeholder={t('addExperience.location')}
                    text=""
                    onChange={handleChange('location')}
                    value={values?.location}
                />
                <InputField
                    name="from"
                    type="date"
                    text={t('addExperience.fromDate')}
                    onChange={handleChange('from')}
                    value={values?.from}
                />
                <InputField
                    name="to"
                    type="date"
                    text={t('addExperience.toDate')}
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
                        {t('addExperience.currentJob')}
                    </label>
                </div>
                <TextArea
                    name="description"
                    text={t('addExperience.about')}
                    placeholder={t('addExperience.jobDescription')}
                    onChange={handleChange('description')}
                    value={values?.description}
                />
                <button type="submit" className="btn btn--gradient">
                    {loader === true ? <CircleDashedLoader /> : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default FormAddExperience;
