import * as React from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

import { toast, ToastContainer } from 'react-toastify';

import InputField from '../../components/InputField/InputField';
import InputDropdown from '../../components/InputDropdown/InputDropdown';
import TextArea from '../../components/TextAreaField/TextAreaField';

import { createProfile } from '../../store/profile/effects';

const FormCreateProfile = () => {
    const dispatch = useDispatch();
    const history = useHistory();

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
                (err: any) => toast(err),
                (mess: string) => toast(mess),
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
                () => history.push('/finaldashboard')
            )
        );
    };

    return (
        <div
            style={{
                fontFamily: 'Poppins, sans-serif',
                marginTop: '6%',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <div className="block-title" style={{ textAlign: 'center' }}>
                <h3>Lets get some information to make your profile stand out</h3>
            </div>
            <form onSubmit={handleSubmit} className="wrapper" style={{ width: '70%' }}>
                <InputField
                    name="handle"
                    placeholder="Name"
                    text="*A unique handle for your profile URL. Your full name, company name, nickname"
                    onChange={handleChange('handle')}
                    value={values.handle}
                    required
                />
                <InputDropdown
                    options={options}
                    info="Give us an idea of where you are at in your career"
                    onChange={handleChange('status')}
                    value={values.status}
                    name="status"
                    placeholder="Status"
                    required
                />
                <InputField
                    name="company"
                    placeholder="Company"
                    text="Could be your own company or one you work for"
                    onChange={handleChange('company')}
                    value={values.company}
                />
                <InputField
                    name="website"
                    placeholder="Website"
                    text="Could be your own website or a company one"
                    onChange={handleChange('website')}
                    value={values.website}
                />
                <InputField
                    name="location"
                    placeholder="Location"
                    text="City or city & state suggested (eg. DaLat, HaNoi)"
                    onChange={handleChange('location')}
                    value={values.location}
                />
                <InputField
                    name="skills"
                    placeholder="Skills"
                    text="Please use comma separated values (eg. HTML,CSS,JavaScript,PHP)"
                    onChange={handleChange('skills')}
                    value={values.skills}
                />
                <InputField
                    name="githubusername"
                    placeholder="Github Username"
                    text="If you want your latest repos and a Github link, include your username"
                    onChange={handleChange('githubusername')}
                    value={values.githubusername}
                />
                <TextArea
                    name="bio"
                    placeholder="Bio"
                    text="Tell us a little about yourself"
                    onChange={handleChange('bio')}
                    value={values.bio}
                />
                <InputField
                    name="twitter"
                    placeholder="link"
                    text="Twitter Profile URL"
                    onChange={handleChange('twitter')}
                    value={values.twitter}
                />
                <InputField
                    name="facebook"
                    placeholder="link"
                    text="Facebook Profile URL"
                    onChange={handleChange('facebook')}
                    value={values.facebook}
                />
                <InputField
                    name="linkedin"
                    placeholder="link"
                    text="Linkedin Profile URL"
                    onChange={handleChange('linkedin')}
                    value={values.linkedin}
                />
                <InputField
                    name="youtube"
                    placeholder="link"
                    text="Youtube Profile URL"
                    onChange={handleChange('youtube')}
                    value={values.youtube}
                />
                <InputField
                    name="instagram"
                    placeholder="link"
                    text="Instagram Profile URL"
                    onChange={handleChange('instagram')}
                    value={values.instagram}
                />
                <button type="submit" className="btn btn--gradient">
                    Submit
                </button>
            </form>
            <ToastContainer />
        </div>
    );
};

export default FormCreateProfile;
