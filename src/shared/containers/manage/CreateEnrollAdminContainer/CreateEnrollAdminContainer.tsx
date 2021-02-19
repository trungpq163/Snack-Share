import * as React from 'react';

import CreateEnrollAdmin from 'components/manage/CreateEnrollAdmin/CreateEnrollAdmin';

interface Props {
    users?: any[];
    courses?: any[];
}

const CreateEnrollAdminContainer = ({ users, courses }: Props) => {
    const [values, setValues] = React.useState({
        emailOptions: [],
        courseOptions: [],
    });

    // options = [
    //     { label: values?.role, value: values?.role },
    //     { label: 'admin', value: 'admin' },
    //     { label: 'instructor', value: 'instructor' },
    // ];

    const handleChange = (name: any) => (event: any) => {
        setValues({
            ...values,
            [name]: event.target.value,
        });
    };

    // const emailOptions1 =

    console.log('users', users);
    console.log('courses', courses);

    const propsCreateEnrollAdmin = { users, courses };

    return (
        <CreateEnrollAdmin
            values={values}
            handleChange={handleChange}
            {...propsCreateEnrollAdmin}
        />
    );
};

export default CreateEnrollAdminContainer;
