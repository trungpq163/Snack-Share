import * as React from 'react';
import { useSelector } from 'react-redux';
import CircleLoader from 'components/CircleLoader/CircleLoader';

import PageHeader from 'components/PageHeader/PageHeader';
import AddCourseContainer from 'containers/AddCourseContainer/AddCourseContainer';

import { getCategory } from 'store/category/selectors';

const AddCourse = () => {
    const [loading, setLoading] = React.useState(true);
    const category = useSelector(getCategory);

    React.useEffect(() => {
        setLoading(false);
    }, []);

    return (
        <>
            <PageHeader title="Add Course" />
            {loading ? (
                <CircleLoader />
            ) : (
                <AddCourseContainer category={category.category} loading={category.loading} />
            )}
        </>
    );
};

export default AddCourse;
