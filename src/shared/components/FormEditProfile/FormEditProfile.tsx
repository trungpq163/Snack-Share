import * as React from 'react';
import { ToastContainer } from 'react-toastify';

import InputField from '../../components/InputField/InputField';
import InputDropdown from '../../components/InputDropdown/InputDropdown';
import TextArea from '../../components/TextAreaField/TextAreaField';

interface Props {
    handleSubmit?: (e: React.FormEvent) => void;
    handleChange?: any;
    options: any[];
    values: any;
}

const FormEditProfile = ({ handleSubmit, values, handleChange, options }: Props) => {
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

export default FormEditProfile;
