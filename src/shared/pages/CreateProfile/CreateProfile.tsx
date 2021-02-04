import * as React from 'react';

import PageHeader from 'components/PageHeader/PageHeader';
import InputField from '../../components/InputField/InputField';

const CreateProfile = () => {
    return (
        <div>
            <PageHeader title="Edit Profile" />
            <InputField name="Name" />
        </div>
    );
};

export default CreateProfile;
