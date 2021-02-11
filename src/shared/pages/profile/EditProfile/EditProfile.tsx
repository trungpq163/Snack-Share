import * as React from 'react';
import { useSelector } from 'react-redux';
import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import EditProfileContainer from '../../../containers/profile/EditProfileContainer/EditProfileContainer';

import { getProfile } from '../../../store/profile/selectors';

const EditProfile = () => {
    const profile = useSelector(getProfile);
    return (
        <>
            <PageHeader title="Edit Profile" />
            {profile?.loading ? (
                <CircleLoader />
            ) : (
                <EditProfileContainer loading={profile.loading} profile={profile.profile} />
            )}
        </>
    );
};

export default EditProfile;
