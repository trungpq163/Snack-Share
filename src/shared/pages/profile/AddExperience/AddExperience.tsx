import * as React from 'react';
import { useSelector } from 'react-redux';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

import PageHeader from 'components/layout/PageHeader/PageHeader';
import AddExperienceContainer from 'containers/profile/AddExperienceContainer/AddExperienceContainer';

import { getProfile } from '../../../store/profile/selectors';

const AddExperience = () => {
    const profile = useSelector(getProfile);

    return (
        <>
            <PageHeader title="Add Experience" />
            {profile?.loading ? (
                <CircleLoader />
            ) : (
                <AddExperienceContainer loading={profile.loading} profile={profile.profile} />
            )}
        </>
    );
};

export default AddExperience;
