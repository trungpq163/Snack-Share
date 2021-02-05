import * as React from 'react';
import { useSelector } from 'react-redux';
import CircleLoader from 'components/CircleLoader/CircleLoader';
import PageHeader from '../../components/PageHeader/PageHeader';
import EditProfileContainer from '../../containers/EditProfileContainer/EditProfileContainer';

import { getProfile } from '../../store/profile/selectors';

const EditProfile = () => {
    // eslint-disable-next-line prefer-const
    let profile = useSelector(getProfile);
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
