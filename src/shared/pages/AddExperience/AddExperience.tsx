import * as React from 'react';
import { useSelector } from 'react-redux';
import CircleLoader from 'components/CircleLoader/CircleLoader';

import PageHeader from 'components/PageHeader/PageHeader';
import AddExperienceContainer from 'containers/AddExperienceContainer/AddExperienceContainer';

import { getProfile } from '../../store/profile/selectors';

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
