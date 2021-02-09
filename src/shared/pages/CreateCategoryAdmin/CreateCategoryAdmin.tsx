import * as React from 'react';
import PageHeader from 'components/PageHeader/PageHeader';
import CreateCategoryContainer from 'containers/CreateCategoryContainer/CreateCategoryContainer';

const CreateCategoryAdmin = () => {
    return (
        <>
            <PageHeader title="Create Category" />
            <CreateCategoryContainer />
        </>
    );
};

export default CreateCategoryAdmin;
