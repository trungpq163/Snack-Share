import * as React from 'react';

import { useTranslation } from 'react-i18next';
import InputField from '../../../components/common/InputField/InputField';
import TextArea from '../../../components/common/TextAreaField/TextAreaField';
import InputDropdown from '../../../components/common/InputDropdown/InputDropdown';

interface Props {
    values: any;
    handleChange: any;
    handleChangeFile: any;
    options: any;
    skillLevelOptions: any;
    languageOptions: any;
    handleSubmit: any;
}

const EditCourse = ({
    handleChange,
    handleChangeFile,
    languageOptions,
    options,
    skillLevelOptions,
    values,
    handleSubmit,
}: Props) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>{t('editCourse.title')}</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="courseName"
                    placeholder={t('editCourse.course')}
                    text={t('editCourse.requiredFieldsSuggestion')}
                    onChange={handleChange('courseName')}
                    value={values?.courseName}
                    required={true}
                />
                <InputField
                    name="price"
                    placeholder={t('editCourse.coursePrice')}
                    inputNumber="this.value = this.value.replace(/[^0-9.]/g, '').replace(/(\..*?)\..*/g, '$1');"
                    text={t('editCourse.coursePriceSuggestion')}
                    type="number"
                    onChange={handleChange('price')}
                    value={values?.price}
                    required={true}
                />
                <InputDropdown
                    options={languageOptions}
                    onChange={handleChange('language')}
                    value={values?.language}
                    info={t('editCourse.languageSuggestion')}
                    name="language"
                    required={true}
                />
                <InputDropdown
                    options={skillLevelOptions}
                    onChange={handleChange('skillLevel')}
                    value={values?.skillLevel}
                    info={t('editCourse.skillLevelSuggestion')}
                    name="skillLevel"
                    required={true}
                />
                <InputDropdown
                    options={options}
                    onChange={handleChange('category')}
                    value={values?.category}
                    name="category"
                    info={t('editCourse.categorySuggestion')}
                    required={true}
                />
                <TextArea
                    name="courseDescription"
                    text={t('editCourse.descriptionSuggestion')}
                    placeholder={t('editCourse.courseDescription')}
                    onChange={handleChange('courseDescription')}
                    value={values?.courseDescription}
                    required={true}
                />
                <InputField
                    name="image"
                    text={t('editCourse.uploadImageSuggestion')}
                    acceptFile="image/*"
                    type="file"
                    onChange={handleChangeFile('image')}
                    required={true}
                />
                <button type="submit" className="btn btn--gradient">
                    {t('editCourse.update')}
                </button>
            </form>
        </div>
    );
};

export default EditCourse;
