import * as React from 'react';

import PageHeader from 'components/PageHeader/PageHeader';
import CreateProfileContainer from '../../containers/CreateProfileContainer/CreateProfileContainer';

const CreateProfile = () => {
    return (
        <div>
            <PageHeader title="Edit Profile" />
            <CreateProfileContainer />
        </div>
    );
};

export default CreateProfile;
