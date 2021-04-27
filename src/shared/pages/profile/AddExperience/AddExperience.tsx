import * as React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { dispatchSetCurrentUser } from '../../../store/auth/effects';
import { getProfile } from '../../../store/profile/selectors';
import { getCurrentProfile } from '../../../store/profile/effects';
import { getAuth } from '../../../store/auth/selectors';
import AddExperienceContainer from '../../../containers/profile/AddExperienceContainer/AddExperienceContainer';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';

const AddExperience = () => {
    const dispatch = useDispatch();
    const profile = useSelector(getProfile);
    const auth = useSelector(getAuth);

    React.useEffect(() => {
        window.scrollTo({
            top: 0,
        });
    }, []);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            const decoded = jwtDecode(localStorage.jwtToken);
            dispatch(dispatchSetCurrentUser(decoded));
        }
    }, [dispatch]);

    React.useEffect(() => {
        // dispatch(getCurrentProfile());
        if (localStorage.jwtToken) {
            dispatch(getCurrentProfile());
        }
    }, [dispatch]);

    return (
        <>
            <PageHeader title="Add Experience" />
            {profile?.loading ? (
                <CircleLoader />
            ) : (
                <AddExperienceContainer
                    loading={profile.loading}
                    profile={profile.profile}
                    auth={auth}
                />
            )}
        </>
    );
};

export default AddExperience;
