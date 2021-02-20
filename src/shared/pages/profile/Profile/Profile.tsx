/* eslint-disable camelcase */
import * as React from 'react';
import { useSelector } from 'react-redux';

import { useLocation } from 'react-router';
import { getProfile } from 'store/profile/selectors';
import { getAuth } from 'store/auth/selectors';

import CircleLoader from 'components/loader/CircleLoader/CircleLoader';
import PageHeader from 'components/layout/PageHeader/PageHeader';
import ProfileDetails from 'components/profile/ProfileDetails/ProfileDetails';
import OtherProfileDetails from 'components/profile/OtherProfileDetails/OtherProfileDetails';
import NotFound from 'pages/common/NotFound/NotFound';

const Profile = () => {
    const location = useLocation();
    const auth = useSelector(getAuth);
    const profile = useSelector(getProfile);
    const idUser = location?.pathname?.split('/user/').join('');
    const otherProfile = profile?.profiles?.find((x: any) => x.user?._id === idUser);

    const isOwner = auth?.users?.id === idUser;
    console.log('isOwner', isOwner);
    console.log('profile', profile);
    console.log('auth', auth);

    const firstLetterUppercase = (str: string = ''): string => {
        return str.charAt(0).toUpperCase() + str.slice(1);
    };
    console.log('otherProfile', otherProfile);

    return (
        <>
            {profile.loading ? (
                <>
                    <PageHeader
                        title={
                            profile?.profile?.handle ||
                            `${auth?.users?.first_name} ${auth?.users?.last_name}`
                        }
                    />
                    <CircleLoader />
                </>
            ) : !isOwner && otherProfile ? (
                <>
                    <PageHeader title={otherProfile?.handle} />
                    <OtherProfileDetails
                        auth={auth}
                        profile={otherProfile}
                        name={
                            `${firstLetterUppercase(
                                // eslint-disable-next-line camelcase
                                auth?.users.first_name
                                // eslint-disable-next-line camelcase
                            )} ${firstLetterUppercase(auth?.users.last_name)}` || 'nothing here'
                        }
                    />
                </>
            ) : !isOwner && !otherProfile ? (
                <NotFound />
            ) : (
                <>
                    <PageHeader
                        title={
                            profile?.profile?.handle ||
                            `${auth?.users?.first_name} ${auth?.users?.last_name}`
                        }
                    />
                    <ProfileDetails
                        auth={auth}
                        profile={profile.profile}
                        name={
                            `${firstLetterUppercase(
                                // eslint-disable-next-line camelcase
                                auth?.users.first_name
                                // eslint-disable-next-line camelcase
                            )} ${firstLetterUppercase(auth?.users.last_name)}` || 'nothing here'
                        }
                    />
                </>
            )}
        </>
    );
};

export default Profile;
