import * as React from 'react';

import { useTranslation } from 'react-i18next';
import InputField from '../../common/InputField/InputField';
import InputDropdown from '../../common/InputDropdown/InputDropdown';
import TextArea from '../../common/TextAreaField/TextAreaField';

interface Props {
    handleSubmit?: (e: React.FormEvent) => void;
    handleChange?: any;
    options: any[];
    values: any;
}

const FormCreateProfile = ({ handleSubmit, values, handleChange, options }: Props) => {
    const { t } = useTranslation();
    return (
        <div className="block__header">
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>{t('commonProfile.title')}</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="handle"
                    placeholder={t('commonProfile.name')}
                    text={t('commonProfile.uniqueSuggestion')}
                    onChange={handleChange('handle')}
                    value={values.handle}
                    required
                />
                <InputDropdown
                    options={options}
                    info={t('commonProfile.idealSuggestion')}
                    onChange={handleChange('status')}
                    value={values.status}
                    name="status"
                    placeholder={t('commonProfile.status')}
                    required
                />
                <InputField
                    name="company"
                    placeholder={t('commonProfile.company')}
                    text={t('commonProfile.companySuggestion')}
                    onChange={handleChange('company')}
                    value={values.company}
                />
                <InputField
                    name="website"
                    placeholder={t('commonProfile.website')}
                    text={t('commonProfile.websiteSuggestion')}
                    onChange={handleChange('website')}
                    value={values.website}
                />
                <InputField
                    name="location"
                    placeholder={t('commonProfile.location')}
                    text={t('commonProfile.locationSuggestion')}
                    onChange={handleChange('location')}
                    value={values.location}
                />
                <InputField
                    name="skills"
                    placeholder={t('commonProfile.skills')}
                    text={t('commonProfile.skillsSuggestion')}
                    onChange={handleChange('skills')}
                    value={values.skills}
                />
                <InputField
                    name="githubusername"
                    placeholder={t('commonProfile.githubUsername')}
                    text={t('commonProfile.githubSuggestion')}
                    onChange={handleChange('githubusername')}
                    value={values.githubusername}
                />
                <TextArea
                    name="bio"
                    placeholder={t('commonProfile.bio')}
                    text={t('commonProfile.bioSuggestion')}
                    onChange={handleChange('bio')}
                    value={values.bio}
                />
                <InputField
                    name="twitter"
                    placeholder={t('commonProfile.link')}
                    text={t('commonProfile.twitterSuggestion')}
                    onChange={handleChange('twitter')}
                    value={values.twitter}
                />
                <InputField
                    name="facebook"
                    placeholder={t('commonProfile.link')}
                    text={t('commonProfile.facebookSuggestion')}
                    onChange={handleChange('facebook')}
                    value={values.facebook}
                />
                <InputField
                    name="linkedin"
                    placeholder={t('commonProfile.link')}
                    text={t('commonProfile.linkedinSuggestion')}
                    onChange={handleChange('linkedin')}
                    value={values.linkedin}
                />
                <InputField
                    name="youtube"
                    placeholder={t('commonProfile.link')}
                    text={t('commonProfile.youtubeSuggestion')}
                    onChange={handleChange('youtube')}
                    value={values.youtube}
                />
                <InputField
                    name="instagram"
                    placeholder={t('commonProfile.link')}
                    text={t('commonProfile.instagramSuggestion')}
                    onChange={handleChange('instagram')}
                    value={values.instagram}
                />
                <button type="submit" className="btn btn--gradient">
                    Submit
                </button>
            </form>
        </div>
    );
};

export default FormCreateProfile;
