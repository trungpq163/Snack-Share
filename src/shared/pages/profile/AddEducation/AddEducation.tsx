import * as React from 'react';
import { useSelector } from 'react-redux';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';

import PageHeader from 'components/layout/PageHeader/PageHeader';
import AddEducationContainer from 'containers/profile/AddEducationContainer/AddEducationContainer';

import { getProfile } from '../../../store/profile/selectors';

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
