import * as React from 'react';

import PageHeader from 'components/layout/PageHeader/PageHeader';
import CreateProfileContainer from '../../../containers/profile/CreateProfileContainer/CreateProfileContainer';

const CreateProfile = () => {
    return (
        <div>
            <PageHeader title="Create Profile" />
            <CreateProfileContainer />
        </div>
    );
};

export default CreateProfile;
