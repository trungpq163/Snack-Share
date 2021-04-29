import * as React from 'react';
import { useTranslation } from 'react-i18next';

import InputField from '../../../components/common/InputField/InputField';
import CircleDashedLoader from '../../loader/CircleDashedLoader/CircleDashedLoader';

interface Values {
    categoryName?: string;
    no?: number;
}

interface Props {
    values: Values;
    handleSubmit: (e: React.FormEvent) => void;
    loading: boolean;
    handleChange: any;
}

const CreateCategory = ({ values, handleChange, handleSubmit, loading }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>{t('createCategory.createCategory')}</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="categoryName"
                    placeholder={t('createCategory.category')}
                    text={t('createCategory.requireField')}
                    onChange={handleChange('categoryName')}
                    value={values?.categoryName}
                    required={true}
                />
                <button type="submit" className="btn btn--gradient">
                    {loading === true ? <CircleDashedLoader /> : 'Submit'}
                </button>
            </form>
        </div>
    );
};

export default CreateCategory;
