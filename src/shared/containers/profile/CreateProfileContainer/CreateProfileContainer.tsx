import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import jwtDecode from 'jwt-decode';

import { toastSuccessNotify, toastErrorNotify } from 'utils/toast';

import setData from 'utils/setData';
import { createProfile } from '../../../store/profile/effects';

import FormCreateProfile from '../../../components/profile/FormCreateProfile/FormCreateProfile';

const CreateProfileContainer = ({ auth }: any) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const decoded = jwtDecode(localStorage.jwtToken);

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
                () =>
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
                    }),
                () => setData(dispatch, decoded),
                () => history.push(`/user/${auth?.users?.id}`)
            )
        );
    };

    return (
        <FormCreateProfile
            handleSubmit={handleSubmit}
            values={values}
            handleChange={handleChange}
            options={options}
        />
    );
};

export default CreateProfileContainer;
