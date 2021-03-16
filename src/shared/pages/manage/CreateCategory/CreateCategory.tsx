import * as React from 'react';
import PageHeader from '../../../components/layout/PageHeader/PageHeader';
import CreateCategoryContainer from '../../../containers/manage/CreateCategoryContainer/CreateCategoryContainer';

const CreateCategory = () => {
    return (
        <>
            <PageHeader title="Create Category" />
            <CreateCategoryContainer />
        </>
    );
};

export default CreateCategory;
