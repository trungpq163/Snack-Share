import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { toastSuccessNotify, toastErrorNotify } from '../../../utils/toast';

import FormEditProfile from '../../../components/profile/FormEditProfile/FormEditProfile';
import { createProfile } from '../../../store/profile/effects';

import CircleLoader from '../../../components/loader/CircleLoader/CircleLoader';
import isEmpty from '../../../validation/isEmpty';
import setData from '../../../utils/setData';

const EditProfileContainer = ({ profile, loading, auth }: any) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const [decoded, setDecoded] = React.useState(undefined);

    const [values, setValues] = React.useState({
        handle: '',
        company: '',
        website: '',
        location: '',
        status: '',
        skills: '',
        githubusername: '',
        bio: '',
        twitter: '',
        facebook: '',
        linkedin: '',
        youtube: '',
        instagram: '',
    });

    const [loader, setLoader] = React.useState(false);

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            setDecoded(jwtDecode(localStorage.getItem('jwtToken') as string));
        }
    }, []);

    React.useEffect(() => {
        // Bring skills array back to CSV
        const skillsCSV = profile?.skills?.join(',');
        // If profile field doesn't exist, make empty string
        const handle = !isEmpty(profile?.handle) ? profile?.handle : '';
        const company = !isEmpty(profile?.company) ? profile?.company : '';
        const website = !isEmpty(profile?.website) ? profile?.website : '';
        const location = !isEmpty(profile?.location) ? profile?.location : '';
        const status = !isEmpty(profile?.status) ? profile?.status : '';
        const githubUsername = !isEmpty(profile?.githubusername) ? profile?.githubusername : '';
        const bio = !isEmpty(profile?.bio) ? profile?.bio : '';
        const twitter = !isEmpty(profile?.social?.twitter) ? profile?.social?.twitter : '';
        const facebook = !isEmpty(profile?.social?.facebook) ? profile?.social?.facebook : '';
        const linkedin = !isEmpty(profile?.social?.linkedin) ? profile?.social?.linkedin : '';
        const youtube = !isEmpty(profile?.social?.youtube) ? profile?.social?.youtube : '';
        const instagram = !isEmpty(profile?.social?.instagram) ? profile?.social?.instagram : '';

        setValues({
            ...values,
            handle: handle,
            company: company,
            website: website,
            location: location,
            status: status,
            skills: skillsCSV,
            githubusername: githubUsername,
            bio: bio,
            twitter: twitter,
            facebook: facebook,
            linkedin: linkedin,
            youtube: youtube,
            instagram: instagram,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [profile]);

    // Select options for status
    const options = [
        { label: '* Select Professional Status', value: 0 },
        { label: 'Developer', value: 'Developer' },
        { label: 'Junior Developer', value: 'Junior Developer' },
        { label: 'Senior Developer', value: 'Senior Developer' },
        { label: 'Manager', value: 'Manager' },
        { label: 'Student or Learning', value: 'Student or Learning' },
        { label: 'Instructor or Teacher', value: 'Instructor or Teacher' },
        { label: 'Intern', value: 'Intern' },
        { label: 'Other', value: 'Other' },
    ];

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setLoader(true);

        const profileData = {
            handle: values.handle,
            company: values.company,
            website: values.website,
            location: values.location,
            status: values.status,
            skills: values.skills,
            githubusername: values.githubusername,
            bio: values.bio,
            twitter: values.twitter,
            facebook: values.facebook,
            linkedin: values.linkedin,
            youtube: values.youtube,
            instagram: values.instagram,
        };

        dispatch(
            createProfile(
                profileData,
                (err: any) => toastErrorNotify(err),
                (mess: string) => toastSuccessNotify(mess),
                () => {
                    setValues({
                        handle: '',
                        company: '',
                        website: '',
                        location: '',
                        status: '',
                        skills: '',
                        githubusername: '',
                        bio: '',
                        twitter: '',
                        facebook: '',
                        linkedin: '',
                        youtube: '',
                        instagram: '',
                    });
                    setLoader(false);
                },
                () => setData(dispatch, decoded),
                () => history.push(`/user/${auth?.users?.id}`)
            )
        );
    };

    return (
        <>
            {loading || profile?.handle === '' ? (
                <CircleLoader />
            ) : (
                <FormEditProfile
                    handleSubmit={handleSubmit}
                    loader={loader}
                    values={values}
                    handleChange={handleChange}
                    options={options}
                />
            )}
        </>
    );
};

export default EditProfileContainer;
