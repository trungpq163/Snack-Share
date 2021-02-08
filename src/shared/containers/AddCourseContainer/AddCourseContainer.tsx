import jwtDecode from 'jwt-decode';
import * as React from 'react';
import { useDispatch } from 'react-redux';
import { useHistory, useLocation } from 'react-router';
import { toast } from 'react-toastify';

import { addCourse } from 'store/course/effects';

import AddCourse from 'components/AddCourse/AddCourse';
import CircleLoader from 'components/CircleLoader/CircleLoader';

interface Props {
    category?: any[];
    loading?: boolean;
}

const AddCourseContainer = ({ category, loading }: Props) => {
    const dispatch = useDispatch();
    const history = useHistory();
    const location = useLocation();

    const [decoded, setDecoded] = React.useState(undefined);

    const pathName = location?.pathname || '';
    const pathNameHandle = pathName.split('/addcourse/').join('');

    const [values, setValues] = React.useState({
        courseName: '',
        courseDescription: '',
        image: '',
        category: '',
    });

    const options = category?.map((x) => ({
        label: x?.categoryName || '',
        value: x?._id || '',
    }));

    React.useEffect(() => {
        if (localStorage.jwtToken) {
            setDecoded(jwtDecode(localStorage.getItem('jwtToken') as string));
        }
    }, []);

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    const handleSubmit = (e: React.FocusEvent) => {
        e.preventDefault();

        const courseData = {
            courseName: values.courseName,
            courseDescription: values.courseDescription,
            image: values.image,
            instructor: pathNameHandle,
            category: values.category,
        };

        dispatch(
            addCourse(
                courseData,
                (err: any) => toast(err),
                (mess: string) => toast(mess),
                () =>
                    setValues({
                        courseName: '',
                        courseDescription: '',
                        image: '',
                        category: '',
                    })
            )
        );
    };

    return (
        <>
            {loading ? (
                <CircleLoader />
            ) : (
                <AddCourse
                    handleSubmit={handleSubmit}
                    values={values}
                    handleChange={handleChange}
                    options={options}
                />
            )}
        </>
    );
};

export default AddCourseContainer;
