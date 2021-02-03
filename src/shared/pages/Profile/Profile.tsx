import * as React from 'react';

import PageHeader from '../../components/PageHeader/PageHeader';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';

const Profile = () => {
    return (
        <>
            <PageHeader title="Your Profiles" />
            <ProfileDetails />
        </>
    );
};

export default Profile;
