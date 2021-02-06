import * as React from 'react';
import { useSelector } from 'react-redux';
import CircleLoader from 'components/CircleLoader/CircleLoader';

import PageHeader from 'components/PageHeader/PageHeader';
import AddEducationContainer from 'containers/AddEducationContainer/AddEducationContainer';

import { getProfile } from '../../store/profile/selectors';

const AddEducation = () => {
    const profile = useSelector(getProfile);

    return (
        <>
            <PageHeader title="Add Education" />
            {profile?.loading ? (
                <CircleLoader />
            ) : (
                <AddEducationContainer loading={profile.loading} profile={profile.profile} />
            )}
        </>
    );
};

export default AddEducation;
