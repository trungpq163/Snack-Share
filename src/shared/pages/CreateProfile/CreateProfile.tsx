import * as React from 'react';

import PageHeader from 'components/PageHeader/PageHeader';
import FormCreateProfile from '../../components/FormCreateProfile/FormCreateProfile';

const CreateProfile = () => {
    return (
        <div>
            <PageHeader title="Edit Profile" />
            <FormCreateProfile />
        </div>
    );
};

export default CreateProfile;
