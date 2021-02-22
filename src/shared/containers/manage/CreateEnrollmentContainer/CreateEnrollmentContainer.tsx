import * as React from 'react';
import { useDispatch } from 'react-redux';
import { toast } from 'react-toastify';
import CreateEnrollment from 'components/manage/CreateEnrollment/CreateEnrollment';
import { addEnrollmentsByAdmin, getAllEnrollments } from 'store/enrollment/effects';

interface Props {
    users?: any[];
    courses?: any[];
}

const CreateEnrollmentContainer = ({ users, courses }: Props) => {
    const dispatch = useDispatch();
    const [values, setValues] = React.useState({
        userId: '',
        courseId: '',
    });

    const [options, setOptions] = React.useState({
        users: [],
        courses: [],
    });

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    // let emailOptions = [{ label: 'values.', value: 'values?.role' }];
    const userOptions = users?.map((user) => ({
        label: user?.email,
        value: user?._id,
    }));

    const courseOptions = courses?.map((course) => ({
        label: course?.courseName,
        value: course?._id,
    }));

    const handleCourseOptions = courseOptions?.unshift({
        label: 'Select course',
        value: '************',
    });

    const finaleUserOptions = userOptions?.unshift({
        label: 'Select user',
        value: '************',
    });

    React.useEffect(() => {
        setOptions({
            users: userOptions as any,
            courses: courseOptions as any,
        });
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleSubmit = (e: React.FormEvent<any>) => {
        e.preventDefault();

        const dataEnrollment = {
            student: values.userId,
            course: values.courseId,
        };

        dispatch(
            addEnrollmentsByAdmin(
                dataEnrollment,
                (err: any) => toast(err),
                (mess: string) => toast(mess),
                () =>
                    setValues({
                        userId: '',
                        courseId: '',
                    }),
                () => dispatch(getAllEnrollments())
            )
        );
    };

    const propsCreateEnrollAdmin = { users, courses, values, handleChange, options, handleSubmit };
    return <CreateEnrollment {...propsCreateEnrollAdmin} />;
};

export default CreateEnrollmentContainer;
