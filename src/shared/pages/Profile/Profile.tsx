import * as React from 'react';
import { useSelector } from 'react-redux';

import { getProfile } from '../../store/profile/selectors';
import { getAuth } from '../../store/auth/selectors';

import PageHeader from '../../components/PageHeader/PageHeader';
import ProfileDetails from '../../components/ProfileDetails/ProfileDetails';
import CircleLoader from '../../components/CircleLoader/CircleLoader';

const Profile = () => {
    const auth = useSelector(getAuth);
    const profile = useSelector(getProfile);

    const firstLetterUppercase = (str: string = ''): string => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };

    return (
        <>
            <PageHeader title="Your Profiles" />
            {profile.loading ? (
                <CircleLoader />
            ) : (
                <ProfileDetails
                    auth={auth}
                    profile={profile}
                    name={
                        `${firstLetterUppercase(
                            // eslint-disable-next-line camelcase
                            auth?.users.first_name
                            // eslint-disable-next-line camelcase
                        )} ${firstLetterUppercase(auth?.users.last_name)}` || 'nothing here'
                    }
                />
            )}
        </>
    );
};

export default Profile;
