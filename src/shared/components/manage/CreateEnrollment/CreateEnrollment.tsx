import * as React from 'react';
import { useTranslation } from 'react-i18next';

import InputDropdown from '../../../components/common/InputDropdown/InputDropdown';
import CircleDashedLoader from '../../loader/CircleDashedLoader/CircleDashedLoader';

interface Props {
    values?: any;
    users?: any;
    courses?: any[];
    loading: boolean;
    handleChange: (name: any) => (event: any) => void;
    options: any;
    handleSubmit: any;
}

const CreateEnrollment = ({ values, handleChange, options, handleSubmit, loading }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <div className="block-title block-title__center">
                <h3>{t('enrolledStudent.createEnrollment')}</h3>
            </div>
            <form className="wrapper" style={{ width: '70%' }} onSubmit={handleSubmit}>
                <InputDropdown
                    info={t('createEnrollment.studentEmail')}
                    options={options?.users}
                    value={values?.userId}
                    name="userId"
                    onChange={handleChange('userId')}
                    required
                />
                <InputDropdown
                    info={t('createEnrollment.courseName')}
                    options={options?.courses}
                    value={values?.courseId}
                    name="courseId"
                    onChange={handleChange('courseId')}
                    required
                />
                <button type="submit" className="btn btn--gradient">
                    {loading === true ? <CircleDashedLoader /> : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default CreateEnrollment;
