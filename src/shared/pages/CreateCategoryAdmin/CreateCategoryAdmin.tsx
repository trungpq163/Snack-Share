import * as React from 'react';

import CircleLoader from 'components/CircleLoader/CircleLoader';
import PageHeader from 'components/PageHeader/PageHeader';
import CreateCategoryContainer from 'containers/CreateCategoryContainer/CreateCategoryContainer';

const CreateCategoryAdmin = () => {
    const [loading, setLoading] = React.useState(true);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <PageHeader title="Create Category" />
            {loading ? <CircleLoader /> : <CreateCategoryContainer />}
        </>
    );
};

export default CreateCategoryAdmin;
